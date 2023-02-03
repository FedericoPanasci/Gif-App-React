import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category, cantValue }) => {
  const { images, isLoading } = useFetchGifs({ category, cantValue });
  console.log(isLoading);

  return (
    <>
      <h3 key={category}>{category}</h3>
      {isLoading ? (
        <h1> aguarde un instante </h1>
      ) : (
        <div className="card-grid">
          {images.map((image) => (
            <GifItem key={image.id} {...image} />
          ))}
        </div>
      )}
    </>
  );
};
