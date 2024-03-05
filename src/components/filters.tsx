import { useEffect, useRef, useState } from "react";
import { Input } from ".";
import { Product } from "@/types/product";

interface FiltersProps {
  onFilterChange: (filter: Partial<Product>) => void;
}

export const Filters = (props: FiltersProps) => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number | null>(null);
  const [brand, setBrand] = useState<string>("");
  const [activeFilter, setActiveFilter] = useState<string>();
  const refName = useRef<HTMLInputElement>(null);
  const refPrice = useRef<HTMLInputElement>(null);
  const refBrand = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const obj = {} as Partial<Product>;
    switch (activeFilter) {
      case "name":
        if (name.length > 0) obj.product = name;
        break;
      case "price":
        if (price && price > 0) obj.price = price;
        break;
      case "brand":
        if (brand.length > 0) obj.brand = brand;
        break;
    }

    props.onFilterChange(obj);
  }, [name, price, brand, activeFilter]);

  const clearFilters = () => {
    setName("");
    refName.current!.value = "";
    refPrice.current!.value = "";
    refBrand.current!.value = "";
    setPrice(null);
    setBrand("");
    setActiveFilter("");
  };

  return (
    <div>
      <Input
        className="filter"
        name="name"
        placeholder="Название..."
        onChange={(event) => setName(event.target.value)}
        onFocus={(event) => setActiveFilter(event.target.name)}
        ref={refName}
        data-filter-active={activeFilter === "name"}
      />
      <Input
        className="filter"
        name="price"
        placeholder="Цена..."
        type="number"
        onChange={(event) => setPrice(Number(event.target.value))}
        onFocus={(event) => setActiveFilter(event.target.name)}
        ref={refPrice}
        data-filter-active={activeFilter === "price"}
      />
      <Input
        className="filter"
        name="brand"
        placeholder="Бренд..."
        onChange={(event) => setBrand(event.target.value)}
        onFocus={(event) => setActiveFilter(event.target.name)}
        ref={refBrand}
        data-filter-active={activeFilter === "brand"}
      />

      <button onClick={clearFilters}>Clear filters</button>
    </div>
  );
};
