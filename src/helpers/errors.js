// @flow

function methodRequiresImplementation(methodName: string) {
  return new Error(`Method '${methodName}' requires implementation.`);
}

function propRequired(propName: string) {
  return new Error(`Prop '${propName}' is required.`);
}

export default {
  methodRequiresImplementation,
  propRequired,
};
