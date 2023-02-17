<div className="container procedure-container">
<div className="row procedure-row">
  <h6>Procedure</h6>
  <div className="col-lg-4 col-xl-4 col-md-6">
    <div className="procedure-label">
      General Dentistry Services
    </div>
    <div className="divider procedure-div"></div>

    {generalOptions.map((item, index) => (
      <div key={index} className="mb-3">
        <Form.Check
          value={JSON.stringify([item])}
          id={[item]}
          type="checkbox"
          label={`${item.procedure}`}
          onClick={handleChangeCheckbox("General")}
          required
        />
      </div>
    ))}
  </div>
  <div className="col-lg-4 col-xl-4 col-md-6">
    <div className="procedure-label">Cosmetic Restoration</div>
    <div className="divider procedure-div"></div>

    {cosmeticOptions.map((item, index) => (
      <div key={index} className="mb-3">
        <Form.Check
          value={JSON.stringify([item])}
          id={[item]}
          type="checkbox"
          label={`${item.procedure}`}
          onClick={handleChangeCheckbox("Cosmetic")}
        />
      </div>
    ))}
  </div>
  <div className="col-lg-4 col-xl-4 col-md-6">
    <div className="procedure-label">
      Orthodontic Dentistry Services
    </div>
    <div className="divider procedure-div"></div>

    {orthodonticOptions.map((item, index) => (
      <div key={index} className="mb-3">
        <Form.Check
          value={JSON.stringify([item])}
          id={[item]}
          type="checkbox"
          label={`${item.procedure}`}
          onClick={handleChangeCheckbox("Orthodontic")}
        />
      </div>
    ))}
  </div>
</div>
<div className="row procedure-row">
  <div className="col-lg-4 col-xl-4 col-md-6">
    <div className="procedure-label">Endodontic Treatment</div>
    <div className="divider procedure-div"></div>

    {endodonticOptions.map((item, index) => (
      <div key={index} className="mb-3">
        <Form.Check
          value={JSON.stringify([item])}
          id={[item]}
          type="checkbox"
          label={`${item.procedure}`}
          onClick={handleChangeCheckbox("Endodontic")}
        />
      </div>
    ))}
  </div>
  <div className="col-lg-4 col-xl-4 col-md-6">
    <div className="procedure-label">Prosthetic Procedures</div>
    <div className="divider procedure-div"></div>

    {prostheticOptions.map((item, index) => (
      <div key={index} className="mb-3">
        <Form.Check
          value={JSON.stringify([item])}
          id={[item]}
          type="checkbox"
          label={`${item.procedure}`}
          onClick={handleChangeCheckbox("Prosthetic")}
        />
      </div>
    ))}
  </div>
  <div className="col-lg-4 col-xl-4 col-md-6">
    <div className="procedure-label">Surgical Procedure</div>
    <div className="divider procedure-div"></div>

    {surgicalOptions.map((item, index) => (
      <div key={index} className="mb-3">
        <Form.Check
          value={JSON.stringify([item])}
          id={[item]}
          type="checkbox"
          label={`${item.procedure}`}
          onClick={handleChangeCheckbox("Surgical")}
        />
      </div>
    ))}
  </div>
</div>
</div>