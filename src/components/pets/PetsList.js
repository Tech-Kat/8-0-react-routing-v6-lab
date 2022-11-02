import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";
import { useParams, Navigate } from "react-router-dom";
//page /pets
export const PetsList = ({ pets }) => {
  let {type} = useParams();

  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

// if no type is specified redirect to "(whatever route you want)"

  if(!type){
    return (
      <Navigate to="/pets/cats" />
    )
  }

  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">
      
        {/* All cats section */}
         {type === 'cats' ? cats.map((cat) => (
          <Pet key={cat.id} kind="cat" pet={cat} />
        )): null}

        {/* All dogs section */}
        {type === 'dogs' ? dogs.map((dog) => (
          <Pet key={dog.id} kind="dog" pet={dog} />
        )): null}
      </section>
    </section>
  );
};

export default PetsList;
