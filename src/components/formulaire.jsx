import "../App.css";

function ValidateForm() {
  return (
    <fieldset>
      <div className="formulaire">
        <label className="input_label" for="lname">
          Nom
        </label>
        <input
          className="border"
          type="text"
          id="lname"
          size="100%"
          name="lname"
        />
      </div>

      <div className="formulaire">
        <label className="input_label" for="email">
          {" "}
          Email
        </label>
        <input
          className="border"
          type="email"
          id="email"
          pattern=".+@globex\.com"
          size="100%"
          required
        />
      </div>

      <div className="formulaire">
        <label className="input_label" for="lname">
          Proposition
        </label>
        <input
          className="border text-area"
          type="text"
          id="lname"
          size="100%"
          name="lname"
        />
      </div>
    </fieldset>
  );
}

export default ValidateForm;
