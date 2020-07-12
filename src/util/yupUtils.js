import * as yup from "yup";

const getValidationConstraint = ({ fieldName, fieldType, fieldConstraints }) => {
  const fieldValidationConfig = {};
  
  if (!yup[fieldType]) {
    return fieldValidationConfig;
  }

  let validator = yup[fieldType]();

  fieldConstraints.forEach(validation => {
    const { params, type } = validation;

    if (!validator[type]) {
      return;
    }

    validator = validator[type](...params);
  });

  fieldValidationConfig[fieldName] = validator;

  return fieldValidationConfig;
}

const createSchemaFromTaskFormConfig = taskFormFields => {
  const schema = {};

  taskFormFields.forEach(taskFormField => {
    Object.assign(schema, getValidationConstraint({
      fieldName : taskFormField.label,
      fieldType : taskFormField.typeName,
      fieldConstraints : taskFormField.validationConstraints.map(constraint => {
        return {
          type : constraint.name,
          params : "" //TODO: params = custom validation messages - generate from type and label
        }
      })
    }));
  });

  return yup.object().shape(schema);
}

export default createSchemaFromTaskFormConfig;
