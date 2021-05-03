import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ScheduleTimePicker from './ScheduleTimePicker';

const ScheduleForm = () => (
  <Formik
    initialValues={{
      name: '', dateOfBirth: null, vaccinationTime: '', vaccinationDate: null,
    }}
    validate={(values) => {
      const errors = {};

      if (!values.name) {
        errors.name = 'Insira seu nome';
      }
      if (!values.dateOfBirth) {
        errors.dateOfBirth = 'Insira sua data de nascimento';
      }
      if (!values.vaccinationTime) {
        errors.vaccinationTime = 'Insira o horário de vacinação';
      }
      if (!values.vaccinationDate) {
        errors.vaccinationDate = 'Insira a data de vacinação';
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
                onChange={(date) => setFieldValue('dateOfBirth', date)}
                dateFormat="dd/MM/yyyy"
                maxDate={(new Date()).getTime()}
                onBlur={() => setFieldTouched('dateOfBirth', true)}
                wrapperClassName="w-100"
              />
              <ErrorMessage className="text-danger" name="dateOfBirth" component="div" />
            </div>
          </div>
          <div className="row my-3">
            <h5>Quando você quer ser vacinado?</h5>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6 mb-3">
              <label htmlFor="vaccinationTime" className="form-label w-100">Horário</label>
              <ScheduleTimePicker className={handleIsInvalidClass('vaccinationTime')} />
              <ErrorMessage className="text-danger" name="vaccinationTime" component="div" />
            </div>
            <div className="col-12 col-sm-6 mb-3">
              <label htmlFor="vaccinationDate" className="form-label w-100">Data</label>
              <DatePicker
                name="vaccinationDate"
                className={`form-control ${handleIsInvalidClass('vaccinationDate')}`}
                selected={values.vaccinationDate}
                onChange={(date) => setFieldValue('vaccinationDate', date)}
                dateFormat="dd/MM/yyyy"
                minDate={(new Date()).getTime()}
                onBlur={() => setFieldTouched('vaccinationDate', true)}
                wrapperClassName="w-100"
              />
              <ErrorMessage className="text-danger" name="vaccinationDate" component="div" />
            </div>
          </div>
          <button type="submit" disabled={isSubmitting} className="btn btn-primary btn-lg w-100 my-3">
            Agendar
          </button>
        </Form>
      );
    }}
  </Formik>
);

export default ScheduleForm;
