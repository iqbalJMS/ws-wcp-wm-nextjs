// type T_FieldConfig = {
//   kprScheme: { interestRate: number };
// };

type T_FieldParagraphs = {
  field_content: Array<{ value: string }>;
  field_simulation: Array<{ value: string }>;
  field_title: Array<{ value: string }>;
  config: any;
};

export type T_Simulation = {
  entity_bundle: Array<{ value: string }>;
  field_paragraphs: Array<T_FieldParagraphs>;
};
