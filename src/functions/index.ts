interface Form {
  name: string;
  placeholder: string;
}

interface InputAttributes {
  value: string;
  name: string;
  placeholder: string;
}

export function getInputAttributes(
  input: any,
  forms: Form[]
): InputAttributes[] {
  return Object.values(input).map((value, index) => {
    return {
      value: String(value),
      name: forms[index].name,
      placeholder: forms[index].placeholder,
    };
  });
}
