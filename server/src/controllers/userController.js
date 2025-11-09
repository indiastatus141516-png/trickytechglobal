import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  const { name, email, password, isAdmin = false } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({
      name,
      email,
      password: hashedPassword,
      isAdmin,
    });

    await user.save();

    const payload = {
      user: {
        id: user._id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const payload = {
      user: {
        id: user._id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({
          token,
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            isFirstLogin: user.isFirstLogin,
            isProfileCompleted: user.isProfileCompleted,
            isAgreementSigned: user.isAgreementSigned,
            profileData: user.profileData,
            agreementSignedDate: user.agreementSignedDate,
          }
        });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export const updateProfile = async (req, res) => {
  const { profileData } = req.body;
  const userId = req.user.id;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    user.profileData = profileData;
    user.isProfileCompleted = true;
    user.isFirstLogin = false;
    await user.save();

    res.json({
      msg: 'Profile updated successfully',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        isFirstLogin: user.isFirstLogin,
        isProfileCompleted: user.isProfileCompleted,
        isAgreementSigned: user.isAgreementSigned,
        profileData: user.profileData,
        agreementSignedDate: user.agreementSignedDate,
      }
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export const signAgreement = async (req, res) => {
  const userId = req.user.id;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    user.isAgreementSigned = true;
    user.agreementSignedDate = new Date();
    await user.save();

    res.json({
      msg: 'Agreement signed successfully',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        isFirstLogin: user.isFirstLogin,
        isProfileCompleted: user.isProfileCompleted,
        isAgreementSigned: user.isAgreementSigned,
        profileData: user.profileData,
        agreementSignedDate: user.agreementSignedDate,
      }
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
