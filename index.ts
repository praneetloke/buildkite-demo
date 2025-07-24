import * as pulumi from "@pulumi/pulumi";
import * as random from "@pulumi/random";

// Create a random pet name
const randomPet = new random.RandomPet("randomPet", {
    length: 2,
    separator: "-",
});

// Create a random ID
const randomId = new random.RandomId("randomId", {
    byteLength: 8,
});

// Create a random shuffle
const randomShuffle = new random.RandomShuffle("randomShuffle", {
    inputs: ["one", "two", "three", "four"],
    resultCount: 3,
});

// Export the results
export const petName = randomPet.id;
export const id = randomId.hex;
export const shuffled = randomShuffle.results;
