import Agreement from '../models/Agreement.js';
import User from '../models/User.js';

// Get active agreement
export const getActiveAgreement = async (req, res) => {
  try {
    const agreement = await Agreement.findOne({ isActive: true }).populate('uploadedBy', 'name').sort({ createdAt: -1 });
    if (!agreement) {
      return res.status(404).json({ msg: 'No active agreement found' });
    }
    res.json(agreement);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Create agreement (admin only)
export const createAgreement = async (req, res) => {
  const { title, content, version, isActive } = req.body;
  const uploadedBy = req.user.id;

  try {
    // Deactivate previous active agreement if this one is active
    if (isActive === 'true' || isActive === true) {
      await Agreement.updateMany({ isActive: true }, { isActive: false });
    }

    const agreementData = {
      title,
      content,
      uploadedBy,
      version,
      isActive: isActive === 'true' || isActive === true
    };

    // Handle file upload
    if (req.file) {
      agreementData.fileUrl = `/uploads/${req.file.filename}`;
    }

    const agreement = new Agreement(agreementData);

    await agreement.save();

    const agreementWithUploader = await Agreement.findById(agreement._id).populate('uploadedBy', 'name');

    res.json({ msg: 'Agreement created successfully', agreement: agreementWithUploader });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Update agreement (admin only)
export const updateAgreement = async (req, res) => {
  const { id } = req.params;
  const { title, content, version, isActive } = req.body;

  try {
    const updates = {
      title,
      content,
      version,
      isActive: isActive === 'true' || isActive === true
    };

    // Handle file upload
    if (req.file) {
      updates.fileUrl = `/uploads/${req.file.filename}`;
    }

    // If activating this agreement, deactivate others
    if (updates.isActive) {
      await Agreement.updateMany({ _id: { $ne: id }, isActive: true }, { isActive: false });
    }

    const agreement = await Agreement.findByIdAndUpdate(id, updates, { new: true }).populate('uploadedBy', 'name');
    if (!agreement) {
      return res.status(404).json({ msg: 'Agreement not found' });
    }

    res.json({ msg: 'Agreement updated successfully', agreement });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Delete agreement (admin only)
export const deleteAgreement = async (req, res) => {
  const { id } = req.params;

  try {
    const agreement = await Agreement.findByIdAndDelete(id);
    if (!agreement) {
      return res.status(404).json({ msg: 'Agreement not found' });
    }

    res.json({ msg: 'Agreement deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get all agreements (admin only)
export const getAllAgreements = async (req, res) => {
  try {
    const agreements = await Agreement.find().populate('uploadedBy', 'name').sort({ createdAt: -1 });
    res.json(agreements);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Activate/deactivate agreement (admin only)
export const toggleAgreementStatus = async (req, res) => {
  const { id } = req.params;

  try {
    const agreement = await Agreement.findById(id);
    if (!agreement) {
      return res.status(404).json({ msg: 'Agreement not found' });
    }

    if (agreement.isActive) {
      agreement.isActive = false;
    } else {
      // Deactivate all other agreements
      await Agreement.updateMany({ isActive: true }, { isActive: false });
      agreement.isActive = true;
    }

    await agreement.save();

    const updatedAgreement = await Agreement.findById(id).populate('uploadedBy', 'name');

    res.json({
      msg: `Agreement ${agreement.isActive ? 'activated' : 'deactivated'} successfully`,
      agreement: updatedAgreement
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
