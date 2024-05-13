interface ResultsProps {
  label: number;
}

const labels = ["A", "AB", "B", "O"];

export function resultTransform(results: ResultsProps[]) {
  const transformedValues = results.map((result) => {
    const labelValue = result.label;
    const stringValue = labels[labelValue];

    return { label: stringValue};
  });

  return transformedValues;
}
