import {useFormik} from 'formik';

export interface IProps<T> {
  values: Array<IValues>;
  onSubmit: (values: T) => void;
  validationSchema: any;
}

export interface IValues {
  key: string;
  initialValue: string;
}

export const formikValidation = <T>({values, onSubmit, validationSchema}: IProps<T>) => {
  const formatInitialValues = () => {
    let initialValuesFormatted = {} as T;
    values.map((value: IValues) => {
      initialValuesFormatted = {
        ...initialValuesFormatted,
        [value.key]: value.initialValue,
      };
    });
    return initialValuesFormatted;
  };

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: formatInitialValues(),
    onSubmit: (values) => onSubmit(values),
    validationSchema: validationSchema,
  });

  const onChange = (e) => {
    validation.handleChange(e);
  };

  const onBlur = (e) => {
    validation.handleBlur(e);
  };

  const handleSubmit = (e) => {
    validation.handleSubmit(e);
  };

  return {onChange, onBlur, handleSubmit, values: validation.values, errors: validation.errors};
};
