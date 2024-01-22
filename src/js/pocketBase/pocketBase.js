import PocketBase from "pocketbase";
export { pokemonTypes, pokemonData };

const pb = new PocketBase("http://127.0.0.1:8090");

function pokemonTypes() {
  return pb.collection("types").getFullList({
    sort: "name.english",
  });
}
function pokemonData(page, perPage, weakness) {
  return pb.collection("pockemon").getList(page, perPage, {
    filter: weakness && weakness !== "All" ? `type ~ "${weakness}"` : "",
  });
}
