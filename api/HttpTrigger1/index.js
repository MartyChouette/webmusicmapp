module.exports = async function (context, req) {
  context.log("returning list of dogs. ");
  const dogs = [
    { name: "Azure" },
    { name: "Sammy" },
    { name: "Roscoe" },
    { name: "Bailey" },
    { name: "Butch" },
    { name: "Pookie" },
  ];
  context.res = {
    body: {
      dogs: dogs,
    },
    header: {
      "Content-Type": "application/json",
    },
  };
};
