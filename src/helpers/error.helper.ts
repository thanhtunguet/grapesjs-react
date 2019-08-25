export class ErrorHelper {
  public static methodRequiresImplementation(methodName: string) {
    return new Error(`Method '${methodName}' requires implementation.`);
  }

  public static propRequired(propName: string) {
    return new Error(`Prop '${propName}' is required.`);
  }
}
