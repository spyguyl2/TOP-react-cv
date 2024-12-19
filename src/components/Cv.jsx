const Cv = (formData) => {
  return (
    <>
      <h1>
        {formData.firstName} {formData.lastName}
      </h1>
      <p>{formData.phoneNumber}</p>
      <p>{formData.email}</p>
      <p>{formData.schoolName}</p>
      <p>{formData.titleOfStudy}</p>
      <p>{formData.dateOfStudy}</p>
      <p>{formData.companyName}</p>
      <p>{formData.title}</p>
      <p>{formData.responsibilities}</p>
      <p>{formData.startDate}</p>
      <p>{formData.endDate}</p>
    </>
  );
};

export default Cv;
