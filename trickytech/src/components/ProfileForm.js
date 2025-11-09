import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './ProfileForm.css';

const usStates = {
  'AL': 'Alabama', 'AK': 'Alaska', 'AZ': 'Arizona', 'AR': 'Arkansas', 'CA': 'California',
  'CO': 'Colorado', 'CT': 'Connecticut', 'DE': 'Delaware', 'FL': 'Florida', 'GA': 'Georgia',
  'HI': 'Hawaii', 'ID': 'Idaho', 'IL': 'Illinois', 'IN': 'Indiana', 'IA': 'Iowa',
  'KS': 'Kansas', 'KY': 'Kentucky', 'LA': 'Louisiana', 'ME': 'Maine', 'MD': 'Maryland',
  'MA': 'Massachusetts', 'MI': 'Michigan', 'MN': 'Minnesota', 'MS': 'Mississippi', 'MO': 'Missouri',
  'MT': 'Montana', 'NE': 'Nebraska', 'NV': 'Nevada', 'NH': 'New Hampshire', 'NJ': 'New Jersey',
  'NM': 'New Mexico', 'NY': 'New York', 'NC': 'North Carolina', 'ND': 'North Dakota', 'OH': 'Ohio',
  'OK': 'Oklahoma', 'OR': 'Oregon', 'PA': 'Pennsylvania', 'RI': 'Rhode Island', 'SC': 'South Carolina',
  'SD': 'South Dakota', 'TN': 'Tennessee', 'TX': 'Texas', 'UT': 'Utah', 'VT': 'Vermont',
  'VA': 'Virginia', 'WA': 'Washington', 'WV': 'West Virginia', 'WI': 'Wisconsin', 'WY': 'Wyoming',
  'DC': 'District of Columbia', 'AS': 'American Samoa', 'GU': 'Guam', 'MP': 'Northern Mariana Islands',
  'PR': 'Puerto Rico', 'UM': 'United States Minor Outlying Islands', 'VI': 'Virgin Islands, U.S.'
};


const educationSchema = yup.object().shape({
  degree: yup.string().required('Degree is required'),
  school: yup.string().required('School is required'),
  universityCityZip: yup.string().required('University with city & zip is required'),
  startDate: yup.date().required('Start date is required'),
  endDate: yup.date().required('End date is required'),
});

const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  address: yup.string().required('Address is required'),
  city: yup.string().required('City is required'),
  state: yup.string().required('State is required'),
  zipCode: yup.string().matches(/^[0-9]{3,10}$/, 'Enter a valid zip code').required('Zip code is required'),
  phoneCountryCode: yup.string().required('Country code is required'),
  phoneNumber: yup.string().matches(/^[0-9]{6,15}$/, 'Enter a valid phone number').required('Phone number is required'),
  email: yup.string().email('Enter valid email').required('Email is required'),
  dateOfBirth: yup.string().matches(/^(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])-(19\d{2}|20\d{2}|2100)$/, 'Date of birth must be in MM-DD-YYYY format.').required('Date of birth is required'),
  last4SSN: yup.string().matches(/^[0-9]{0,4}$/, 'Enter last 4 digits'),
  passportNo: yup.string().nullable(),
  skypeID: yup.string().nullable(),
  ethnicity: yup.string().required('Ethnicity is required'),
  candidateTechnology: yup.string().required('Candidate technology is required'),
  numberForMarketing: yup.string().required('Number for marketing is required'),
  emailForMarketing: yup.string().email('Enter valid email for marketing').required('Email for marketing is required'),
  emailForMarketingPassword: yup.string().required('Email for marketing password is required'),
  linkedinForMarketing: yup.string().required('LinkedIn is required'),
  linkedinForMarketingPassword: yup.string().required('LinkedIn for marketing password is required'),
  education: yup.array().of(educationSchema).min(1, 'At least one education entry is required'),
  availabilityForVendorCall: yup.string().required('Availability for vendor call is required'),
  whenCameToUSA: yup.string().required('This field is required'),
  workAuthorization: yup.string().required('Work authorization is required'),
  preferredLocation: yup.string().required('Preferred location is required'),
  expectedSalary: yup.string().required('Expected salary is required'),
  candidateWhatsAppNo: yup.string().matches(/^[0-9]{0,15}$/, 'Enter valid WhatsApp number'),
  recruiterWhatsAppNo: yup.string().matches(/^[0-9]{0,15}$/, 'Enter valid recruiter WhatsApp number'),
  recruiterSkypeID: yup.string().nullable(),
});

const fields = [
  { name: 'firstName', label: 'First Name', required: true },
  { name: 'lastName', label: 'Last Name', required: true },
  { name: 'address', label: 'Address', required: true },
  { name: 'city', label: 'City', required: true },
  { name: 'state', label: 'State', required: true },
  { name: 'zipCode', label: 'Zip Code', required: true },
  { name: 'phoneNumber', label: 'Phone Number', required: true },
  { name: 'email', label: 'E Mail ID', required: true },
  { name: 'dateOfBirth', label: 'Date of Birth (MM-DD-YYYY)', required: true },
  { name: 'last4SSN', label: 'Last 4-digit SSN', required: false, optional: true },
  { name: 'passportNo', label: 'Passport No.', required: false, optional: true },
  { name: 'skypeID', label: 'Skype ID/Team', required: false, optional: true },
  { name: 'ethnicity', label: 'Ethnicity', required: true },
  { name: 'candidateTechnology', label: 'Candidate Technology', required: true },
  { name: 'numberForMarketing', label: 'Number for Marketing', required: true },
  { name: 'emailForMarketing', label: 'Email for Marketing', required: true },
  { name: 'emailForMarketingPassword', label: 'Password for Email Marketing', required: true },
  { name: 'linkedinForMarketing', label: 'LinkedIn for Marketing', required: true },
  { name: 'linkedinForMarketingPassword', label: 'Password for LinkedIn Marketing', required: true },
  { name: 'educationalSchool', label: 'Educational School', required: true },
  { name: 'bachelor', label: 'Bachelor', required: true },
  { name: 'master', label: 'Master', required: true },
  { name: 'universityWithCityZip', label: 'University with CITY and zip code', required: true },
  { name: 'startEndDate', label: 'Start and End Date', required: true },
  { name: 'availabilityForVendorCall', label: 'Availability for Vendor call', required: true },
  { name: 'whenCameToUSA', label: 'When did you come to USA? MM-YY', required: true },
  { name: 'workAuthorization', label: 'Work Authorization (Visa Status)', required: true },
  { name: 'preferredLocation', label: 'Preferred Location (Onsite/Hybrid/Remote)', required: true },
  { name: 'expectedSalary', label: 'Expected Salary', required: true },
  { name: 'candidateWhatsAppNo', label: 'Candidate WhatsApp NO', required: false, optional: true },
  { name: 'recruiterWhatsAppNo', label: "Recruiter’s WhatsApp NO", required: false, optional: true },
  { name: 'recruiterSkypeID', label: "Recruiter’s Skype ID", required: false, optional: true },
];

const ProfileForm = ({ defaultValues = {}, onSubmit = () => {}, isProfileCompleted = false }) => {
  const [editing, setEditing] = useState(null); // field currently being edited
  const [localValues, setLocalValues] = useState(defaultValues || {});
  const [savingField, setSavingField] = useState(null);
  const [educationLocal, setEducationLocal] = useState(
    defaultValues.education && defaultValues.education.length ? defaultValues.education : [
      { degree: 'Bachelor', school: '', universityCityZip: '', startDate: '', endDate: '' }
    ]
  );
  const [educationErrors, setEducationErrors] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
    mode: 'onBlur',
  });

  if (isProfileCompleted && (!defaultValues || Object.keys(defaultValues).length === 0)) return <div>Loading...</div>;


  // handle inline save for single field when profile already completed
  const handleSaveField = async (name) => {
    try {
      setSavingField(name);
      const value = localValues[name] || '';
      const merged = { ...(defaultValues || {}), ...localValues, [name]: value };
      await onSubmit(merged); // parent will call updateProfile
      setEditing(null);
    } catch (err) {
      console.error('save field failed', err);
    } finally {
      setSavingField(null);
    }
  };

  const addEducation = (degreeLabel) => {
    setEducationLocal(prev => ([...prev, { degree: degreeLabel || 'Bachelor', school: '', universityCityZip: '', startDate: '', endDate: '' }]));
  };

  const updateEducationItem = (index, key, value) => {
    setEducationLocal(prev => {
      const copy = [...prev];
      copy[index] = { ...copy[index], [key]: value };
      return copy;
    });
  };

  const removeEducation = (index) => {
    setEducationLocal(prev => prev.filter((_, i) => i !== index));
  };

  // full form submit (first time or edit full profile)
  const onFormSubmit = async (data) => {
    try {
      await onSubmit(data);
      setShowSuccess(true);
    } catch (err) {
      console.error('profile submit error', err);
    }
  };

  // validate education local
  const validateEducation = () => {
    const errors = [];
    educationLocal.forEach((edu, idx) => {
      if (!edu.degree.trim()) errors.push(`Education ${idx + 1}: Degree is required`);
      if (!edu.school.trim()) errors.push(`Education ${idx + 1}: School is required`);
      if (!edu.universityCityZip.trim()) errors.push(`Education ${idx + 1}: University with city & zip is required`);
      if (!edu.startDate) errors.push(`Education ${idx + 1}: Start date is required`);
      if (!edu.endDate) errors.push(`Education ${idx + 1}: End date is required`);
    });
    return errors;
  };

  // Render: if profile not completed => show full form for fill only
  if (!isProfileCompleted) {
    // Full structured form for first-time fill
    // Implement education UI using local state (declared at top-level)
    return (
      <form className="profile-form" onSubmit={handleSubmit((data) => {
        // validate education
        const eduErrors = validateEducation();
        setEducationErrors(eduErrors);
        if (eduErrors.length > 0) {
          return; // prevent submission
        }
        // merge educationLocal into data
        const payload = { ...data, education: educationLocal };
        onFormSubmit(payload);
      })}>
        <h3 style={{ marginTop: 0, color: '#16392e' }}>Candidate Information</h3>
        <div className="profile-grid">
          <div className="profile-field">
            <label className="field-label">First Name <span className="required">*</span></label>
            <input className="field-input" {...register('firstName')} defaultValue={defaultValues.firstName || ''} />
            {errors.firstName && <div className="field-error">{errors.firstName.message}</div>}
          </div>
          <div className="profile-field">
            <label className="field-label">Last Name <span className="required">*</span></label>
            <input className="field-input" {...register('lastName')} defaultValue={defaultValues.lastName || ''} />
            {errors.lastName && <div className="field-error">{errors.lastName.message}</div>}
          </div>

          <div className="profile-field" style={{ gridColumn: '1 / -1' }}>
            <label className="field-label">Address <span className="required">*</span></label>
            <input className="field-input" {...register('address')} defaultValue={defaultValues.address || ''} />
            {errors.address && <div className="field-error">{errors.address.message}</div>}
          </div>

          <div className="profile-field">
            <label className="field-label">City <span className="required">*</span></label>
            <input className="field-input" {...register('city')} defaultValue={defaultValues.city || ''} />
            {errors.city && <div className="field-error">{errors.city.message}</div>}
          </div>
          <div className="profile-field">
            <label className="field-label">State <span className="required">*</span></label>
            <input className="field-input" {...register('state')} defaultValue={defaultValues.state || ''} list="states-list" />
            <datalist id="states-list">
              {Object.entries(usStates).map(([abbr, name]) => (
                <option key={abbr} value={name}>{abbr}</option>
              ))}
            </datalist>
            {errors.state && <div className="field-error">{errors.state.message}</div>}
          </div>
          <div className="profile-field">
            <label className="field-label">Zip Code <span className="required">*</span></label>
            <input className="field-input" {...register('zipCode')} defaultValue={defaultValues.zipCode || ''} inputMode="numeric" />
            {errors.zipCode && <div className="field-error">{errors.zipCode.message}</div>}
          </div>

          <div className="profile-field">
            <label className="field-label">Phone Number <span className="required">*</span></label>
            <div style={{ display: 'flex', gap: 8 }}>
              <select {...register('phoneCountryCode')} defaultValue={defaultValues.phoneCountryCode || '+1'} style={{ width: 120, padding: 8, borderRadius: 8 }}>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+91">+91</option>
                <option value="+61">+61</option>
              </select>
              <input className="field-input" {...register('phoneNumber')} defaultValue={defaultValues.phoneNumber || ''} inputMode="numeric" pattern="[0-9]*" />
            </div>
            {errors.phoneNumber && <div className="field-error">{errors.phoneNumber.message}</div>}
          </div>

          <div className="profile-field">
            <label className="field-label">E Mail ID <span className="required">*</span></label>
            <input className="field-input" {...register('email')} defaultValue={defaultValues.email || ''} type="email" />
            {errors.email && <div className="field-error">{errors.email.message}</div>}
          </div>

          <div className="profile-field">
            <label className="field-label">Date of Birth (MM-DD-YYYY) <span className="required">*</span></label>
            <input className="field-input" {...register('dateOfBirth')} defaultValue={defaultValues.dateOfBirth || ''} type="text" placeholder='MM-DD-YYYY'/>
            {errors.dateOfBirth && <div className="field-error">{errors.dateOfBirth.message}</div>}
          </div>

          <div className="profile-field">
            <label className="field-label">Last 4-digit SSN</label>
            <input className="field-input" {...register('last4SSN')} defaultValue={defaultValues.last4SSN || ''} inputMode="numeric" maxLength={4} />
            {errors.last4SSN && <div className="field-error">{errors.last4SSN.message}</div>}
          </div>
          <div className="profile-field">
            <label className="field-label">Passport No.</label>
            <input className="field-input" {...register('passportNo')} defaultValue={defaultValues.passportNo || ''} />
          </div>
          <div className="profile-field">
            <label className="field-label">Skype ID/Team</label>
            <input className="field-input" {...register('skypeID')} defaultValue={defaultValues.skypeID || ''} />
          </div>

          <div className="profile-field">
            <label className="field-label">Ethnicity <span className="required">*</span></label>
            <input className="field-input" {...register('ethnicity')} defaultValue={defaultValues.ethnicity || ''} />
            {errors.ethnicity && <div className="field-error">{errors.ethnicity.message}</div>}
          </div>
          <div className="profile-field">
            <label className="field-label">Candidate Technology <span className="required">*</span></label>
            <input className="field-input" {...register('candidateTechnology')} defaultValue={defaultValues.candidateTechnology || ''} />
            {errors.candidateTechnology && <div className="field-error">{errors.candidateTechnology.message}</div>}
          </div>
          <div className="profile-field">
            <label className="field-label">Number for Marketing <span className="required">*</span></label>
            <input className="field-input" {...register('numberForMarketing')} defaultValue={defaultValues.numberForMarketing || ''} />
            {errors.numberForMarketing && <div className="field-error">{errors.numberForMarketing.message}</div>}
          </div>

          <div className="profile-field">
            <label className="field-label">Email Id for Marketing <span className="required">*</span></label>
            <input className="field-input" {...register('emailForMarketing')} defaultValue={defaultValues.emailForMarketing || ''} type="email" />
            {errors.emailForMarketing && <div className="field-error">{errors.emailForMarketing.message}</div>}
          </div>
           <div className="profile-field">
            <label className="field-label">Password of Email Id <span className="required">*</span></label>
            <input className="field-input" type="password" {...register('emailForMarketingPassword')} defaultValue={defaultValues.emailForMarketingPassword || ''} />
            {errors.emailForMarketingPassword && <div className="field-error">{errors.emailForMarketingPassword.message}</div>}
          </div>
          <div className="profile-field">
            <label className="field-label">LinkedIn Id for Marketing <span className="required">*</span></label>
            <input className="field-input" {...register('linkedinForMarketing')} defaultValue={defaultValues.linkedinForMarketing || ''} />
            {errors.linkedinForMarketing && <div className="field-error">{errors.linkedinForMarketing.message}</div>}
          </div>
          <div className="profile-field">
            <label className="field-label">Password of LinkedIn Id <span className="required">*</span></label>
            <input className="field-input" type="password" {...register('linkedinForMarketingPassword')} defaultValue={defaultValues.linkedinForMarketingPassword || ''} />
            {errors.linkedinForMarketingPassword && <div className="field-error">{errors.linkedinForMarketingPassword.message}</div>}
          </div>
        </div>

        <h3 style={{ marginTop: 24, color: '#16392e' }}>Educational Details</h3>
        <div style={{ marginBottom: 12 }}>
          {educationLocal.map((edu, idx) => (
            <div key={idx} style={{ background: '#fff', padding: 12, borderRadius: 8, marginBottom: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <div style={{ display: 'flex', gap: 12 }}>
                <div style={{ flex: 1 }}>
                  <label className="field-label">Degree</label>
                  <input className="field-input" value={edu.degree} onChange={e => updateEducationItem(idx, 'degree', e.target.value)} />
                </div>
                <div style={{ flex: 2 }}>
                  <label className="field-label">School</label>
                  <input className="field-input" value={edu.school} onChange={e => updateEducationItem(idx, 'school', e.target.value)} />
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
                <div style={{ flex: 2 }}>
                  <label className="field-label">University with City and zip code</label>
                  <input className="field-input" value={edu.universityCityZip} onChange={e => updateEducationItem(idx, 'universityCityZip', e.target.value)} />
                </div>
                <div style={{ flex: 1 }}>
                  <label className="field-label">Start Date</label>
                  <input className="field-input" type="date" value={edu.startDate} onChange={e => updateEducationItem(idx, 'startDate', e.target.value)} />
                </div>
                <div style={{ flex: 1 }}>
                  <label className="field-label">End Date</label>
                  <input className="field-input" type="date" value={edu.endDate} onChange={e => updateEducationItem(idx, 'endDate', e.target.value)} />
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 8 }}>
                <button type="button" onClick={() => removeEducation(idx)} style={{ background: '#dc3545', color: '#fff', border: 'none', padding: '6px 10px', borderRadius: 6 }}>Remove</button>
              </div>
            </div>
          ))}

          <div style={{ display: 'flex', gap: 8 }}>
            <button type="button" onClick={() => addEducation('Bachelor')} style={{ background: '#2e7c4e', color: '#fff', border: 'none', padding: '8px 10px', borderRadius: 6 }}>+ Add Bachelor</button>
            <button type="button" onClick={() => addEducation('Master')} style={{ background: '#2e7c4e', color: '#fff', border: 'none', padding: '8px 10px', borderRadius: 6 }}>+ Add Master</button>
            <button type="button" onClick={() => addEducation('Other')} style={{ background: '#6c757d', color: '#fff', border: 'none', padding: '8px 10px', borderRadius: 6 }}>+ Add Education</button>
          </div>
          {educationErrors.length > 0 && (
            <div style={{ color: 'red', marginTop: 8 }}>
              {educationErrors.map((error, idx) => <div key={idx}>{error}</div>)}
            </div>
          )}
        </div>

        <h3 style={{ marginTop: 24, color: '#16392e' }}>Important Information</h3>
        <div className="profile-grid">
          <div className="profile-field">
            <label className="field-label">Availability for Vendor call <span className="required">*</span></label>
            <input className="field-input" {...register('availabilityForVendorCall')} defaultValue={defaultValues.availabilityForVendorCall || ''} />
            {errors.availabilityForVendorCall && <div className="field-error">{errors.availabilityForVendorCall.message}</div>}
          </div>
          <div className="profile-field">
            <label className="field-label">When did you come to USA? (MM-YY) <span className="required">*</span></label>
            <input className="field-input" {...register('whenCameToUSA')} defaultValue={defaultValues.whenCameToUSA || ''} placeholder="MM-YY" />
            {errors.whenCameToUSA && <div className="field-error">{errors.whenCameToUSA.message}</div>}
          </div>
          <div className="profile-field">
            <label className="field-label">Work Authorization (Visa Status) <span className="required">*</span></label>
            <input className="field-input" {...register('workAuthorization')} defaultValue={defaultValues.workAuthorization || ''} />
            {errors.workAuthorization && <div className="field-error">{errors.workAuthorization.message}</div>}
          </div>
          <div className="profile-field">
            <label className="field-label">Preferred Location (Onsite/Hybrid/Remote) <span className="required">*</span></label>
            <select className="field-input" {...register('preferredLocation')} defaultValue={defaultValues.preferredLocation || 'Remote'}>
              <option value="Onsite">Onsite</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Remote">Remote</option>
            </select>
            {errors.preferredLocation && <div className="field-error">{errors.preferredLocation.message}</div>}
          </div>
          <div className="profile-field">
            <label className="field-label">Expected Salary <span className="required">*</span></label>
            <input className="field-input" {...register('expectedSalary')} defaultValue={defaultValues.expectedSalary || ''} />
            {errors.expectedSalary && <div className="field-error">{errors.expectedSalary.message}</div>}
          </div>

          <div className="profile-field">
            <label className="field-label">Candidate WhatsApp NO</label>
            <input className="field-input" {...register('candidateWhatsAppNo')} defaultValue={defaultValues.candidateWhatsAppNo || ''} inputMode="numeric" />
          </div>
          <div className="profile-field">
            <label className="field-label">Recruiter’s WhatsApp NO</label>
            <input className="field-input" {...register('recruiterWhatsAppNo')} defaultValue={defaultValues.recruiterWhatsAppNo || ''} inputMode="numeric" />
          </div>
          <div className="profile-field">
            <label className="field-label">Recruiter’s Skype ID</label>
            <input className="field-input" {...register('recruiterSkypeID')} defaultValue={defaultValues.recruiterSkypeID || ''} />
          </div>
        </div>

        <div style={{ marginTop: 18, display: 'flex', justifyContent: 'flex-end' }}>
          <button type="submit" className="btn-submit" disabled={isSubmitting}>{isSubmitting ? 'Saving...' : 'Submit Profile'}</button>
        </div>
        {showSuccess && (
          <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
            <div style={{ background: 'white', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
              <h2>Success!</h2>
              <p>Your profile has been submitted successfully.</p>
              <button onClick={() => setShowSuccess(false)}>OK</button>
            </div>
          </div>
        )}
      </form>
    );
  }

  // Render: profile completed -> show read-only with per-field edit
  const sections = [
    {
      title: 'Personal Information',
      fields: ['firstName', 'lastName', 'address', 'city', 'state', 'zipCode', 'phoneNumber', 'email', 'dateOfBirth', 'last4SSN', 'passportNo', 'skypeID']
    },
    {
      title: 'Professional Information',
      fields: ['ethnicity', 'candidateTechnology', 'numberForMarketing', 'emailForMarketing', 'linkedinForMarketing']
    },
    {
      title: 'Education',
      fields: ['educationalSchool', 'bachelor', 'master', 'universityWithCityZip', 'startEndDate']
    },
    {
      title: 'Important Information',
      fields: ['availabilityForVendorCall', 'whenCameToUSA', 'workAuthorization', 'preferredLocation', 'expectedSalary', 'candidateWhatsAppNo', 'recruiterWhatsAppNo', 'recruiterSkypeID']
    }
  ];

  return (
    <div className="profile-container" style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#16392e' }}>Manage Profile</h1>
      <div style={{
        background: 'linear-gradient(135deg, #16392e, #2e7c4e)',
        color: 'white',
        padding: '20px',
        borderRadius: '12px',
        marginBottom: '30px',
        textAlign: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
      }}>
        <h2 style={{ margin: 0, fontSize: '24px' }}>{localValues.firstName} {localValues.lastName}</h2>
        <p style={{ margin: '5px 0', fontSize: '16px' }}>{localValues.email}</p>
        <p style={{ margin: '5px 0', fontSize: '14px' }}>{localValues.city}, {localValues.state}</p>
      </div>
      {sections.map(section => (
        <div key={section.title} style={{ marginBottom: '30px', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', padding: '20px' }}>
          <h2 style={{ marginTop: 0, color: '#16392e', borderBottom: '2px solid #16392e', paddingBottom: '10px' }}>{section.title}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {section.fields.map(fieldName => {
              const field = fields.find(f => f.name === fieldName);
              if (!field) return null;
              return (
                <div key={field.name} style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                  <label style={{ fontWeight: 'bold', color: '#495057', display: 'block', marginBottom: '8px' }}>
                    {field.label}
                    {field.required && <span style={{ color: 'red' }}>*</span>}
                    {field.optional && <span style={{ color: '#6c757d', fontSize: '12px' }}> (Optional)</span>}
                  </label>
                  <div>
                    {editing === field.name ? (
                      <div>
                        <input
                          style={{ width: '100%', padding: '8px', border: '1px solid #ced4da', borderRadius: '4px', fontSize: '14px' }}
                          value={localValues[field.name] || ''}
                          onChange={e => setLocalValues(prev => ({ ...prev, [field.name]: e.target.value }))}
                        />
                        <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
                          <button
                            style={{ background: '#28a745', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' }}
                            onClick={() => handleSaveField(field.name)}
                            disabled={savingField === field.name}
                          >
                            {savingField === field.name ? 'Saving...' : 'Save'}
                          </button>
                          <button
                            style={{ background: '#6c757d', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' }}
                            onClick={() => { setEditing(null); setLocalValues(defaultValues || {}); }}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ color: '#495057' }}>{localValues[field.name] || <em style={{ color: '#6c757d' }}>Not provided</em>}</div>
                        <button
                          style={{ background: 'none', border: 'none', color: '#007bff', cursor: 'pointer', fontSize: '18px' }}
                          onClick={() => setEditing(field.name)}
                          aria-label={`Edit ${field.label}`}
                        >
                          ✏️
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileForm;