import PocketBase from "pocketbase";
export { pokemonTypes, pokemonData, pokemonAllList, pokemonFind };

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

function pokemonAllList(name) {
  return pb.collection("pockemon").getFullList({
    filter: `name.english ~ "${name}"`,
  });
}

function pokemonFind(id) {
  return pb.collection("pockemon").getFullList({
    filter: `id ~ "${id}"`,
  });
}
