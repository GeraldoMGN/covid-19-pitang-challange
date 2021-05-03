import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ScheduleForm = () => (
  <Formik
    initialValues={{ name: '', dateOfBirth: null }}
    validate={(values) => {
      const errors = {};
      if (!values.name) {
        errors.name = 'Insira seu nome';
      }
      if (values.dateOfBirth === null) {
        errors.dateOfBirth = 'Insira sua data de nascimento';
      }
      return errors;
    }}
  >
    {({
      values, errors, setFieldValue, isSubmitting, touched, setFieldTouched,
    }) => {
      const handleIsInvalidClass = (fieldName) => (errors[fieldName] && touched[fieldName]
        ? 'is-invalid'
        : '');

      return (
        <Form>
          <div className="row">
            <div className="col-12 col-sm-8 mb-3">
              <label htmlFor="name" className="form-label">Nome completo</label>
              <Field
                className={`form-control ${handleIsInvalidClass('name')}`}
                type="name"
                name="name"
                id="name"
                placeholder="Insira seu nome"
              />
              <ErrorMessage className="text-danger" name="name" component="div" />
            </div>
            <div className="col-12 col-sm-4 mb-3">
              <label htmlFor="dateOfBirth" className="form-label w-100">Data de Nascimento</label>
              <DatePicker
                name="dateOfBirth"
                className={`form-control ${handleIsInvalidClass('dateOfBirth')}`}
                selected={values.dateOfBirth}
                onChange={(date) => {
                  setFieldValue('dateOfBirth', date);
                  setFieldTouched('dateOfBirth', true);
                }}
                dateFormat="dd/MM/yyyy"
                maxDate={(new Date()).getTime()}
                onBlur={() => setFieldTouched('dateOfBirth', true)}
                wrapperClassName="w-100"
              />
              <ErrorMessage className="text-danger" name="dateOfBirth" component="div" />
            </div>
          </div>
          <button type="submit" disabled={isSubmitting} className="btn btn-primary">
            Submit
          </button>
        </Form>
      );
    }}
  </Formik>
);

export default ScheduleForm;
