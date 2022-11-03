import React, { useRef } from "react";

interface ShoppingListFormProps {
  onAddItem: (item: string, quantity: number) => void;
}

function ShoppingListForm({ onAddItem }: ShoppingListFormProps): JSX.Element {
  const productInputRef = useRef<HTMLInputElement>(null);
  const quantityInputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct: string = productInputRef.current!.value;
    const newQuantity: number = parseInt(quantityInputRef.current!.value);
    onAddItem(newProduct, newQuantity);
    productInputRef.current!.value = "";
    quantityInputRef.current!.value = "1";
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Product Name" ref={productInputRef} />
      <input
        type="number"
        min={1}
        placeholder="quantity"
        ref={quantityInputRef}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default ShoppingListForm;
