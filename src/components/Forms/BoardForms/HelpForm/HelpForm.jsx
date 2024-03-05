import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import SendButton from 'components/Buttons/SendButton/SendButton';
import css from './HelpForm.module.css';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  comment: Yup.string().min(7).max(230).required('Comment is required'),
});
const initialValues = {
  email: '',
  comment: '',
};

const HelpForm = () => {
  const handleSubmit = () => {};

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.helpForm} autoComplete="off">
        <h4 className={css.helpFormTitle}>Need help</h4>
        <label className={css.label} htmlFor="email">
          <Field
            className={css.helpEmailInput}
            as="input"
            type="text"
            name="email"
            placeholder="Email"
            autoFocus
            required="true"
          />
          <span className={css.helpErrorField}>
            <ErrorMessage name="email" />
          </span>
        </label>
        <label htmlFor="comment">
          <Field
            className={css.helpCommentInput}
            as="textarea"
            type="text"
            name="description"
            placeholder="Comment"
            required="true"
          />
        </label>
        <SendButton text="Send"></SendButton>
      </Form>
    </Formik>
  );
};

export default HelpForm;
