import React from "react";
import { FileFormat, TypeLanguage } from "../../enums/file.enum";
import { TypegenWrapper } from "../../layout/TypeLayout/TypegenWrapper";

const TypePage = () => {
  return <TypegenWrapper from={FileFormat.XML} to={TypeLanguage.Kotlin} />;
};

export default TypePage;
