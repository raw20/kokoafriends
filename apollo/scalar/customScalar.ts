import { GraphQLScalarType, Kind } from "graphql";

export const userCodeScalarType = new GraphQLScalarType({
  name: "userCodeScalar",
  description: "longer 32-bit signed integer value",
  serialize(value: string) {
    if (value) {
      return parseInt(value, 10);
    }
    throw Error(
      "GraphQL long Int Scalar serializer expected a `Number` object"
    );
  },
  parseValue(value) {
    if (typeof value === "number") {
      return value; // Convert incoming integer to String
    }
    throw new Error("GraphQL Date Scalar parser expected a `number`");
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      // Convert hard-coded AST string to integer and then to Date
      return parseInt(ast.value, 10);
    }
    return null;
  },
});
