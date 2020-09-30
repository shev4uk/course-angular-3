export interface Product {
  id: number;
  name: string;
  price: number;
  discount: number;
  isStock: boolean;
  label: Label;
}

enum Label {
  'hit' = 0,
  'action' = 1,
  'hot' = 2,
  'simple' = 3
}
