import { model, Schema } from "mongoose";

const TestSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ["desarrollar", "generar"],
    },
    question: {
      type: String,
      required: true,
    },
    solution: {
      type: String,
      required: function () {
        return this.type === "generar";
      },
    },
  },
  {
    timestamps: true,
  }
);

export const TestModel = model("Test", TestSchema);
