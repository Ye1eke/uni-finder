/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { RecommendUni } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function RecommendUniCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    weather: "",
    region: "",
    country: "",
    degree: "",
    interest: "",
    userSub: "",
  };
  const [weather, setWeather] = React.useState(initialValues.weather);
  const [region, setRegion] = React.useState(initialValues.region);
  const [country, setCountry] = React.useState(initialValues.country);
  const [degree, setDegree] = React.useState(initialValues.degree);
  const [interest, setInterest] = React.useState(initialValues.interest);
  const [userSub, setUserSub] = React.useState(initialValues.userSub);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setWeather(initialValues.weather);
    setRegion(initialValues.region);
    setCountry(initialValues.country);
    setDegree(initialValues.degree);
    setInterest(initialValues.interest);
    setUserSub(initialValues.userSub);
    setErrors({});
  };
  const validations = {
    weather: [],
    region: [],
    country: [],
    degree: [],
    interest: [],
    userSub: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          weather,
          region,
          country,
          degree,
          interest,
          userSub,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new RecommendUni(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "RecommendUniCreateForm")}
      {...rest}
    >
      <TextField
        label="Weather"
        isRequired={false}
        isReadOnly={false}
        value={weather}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              weather: value,
              region,
              country,
              degree,
              interest,
              userSub,
            };
            const result = onChange(modelFields);
            value = result?.weather ?? value;
          }
          if (errors.weather?.hasError) {
            runValidationTasks("weather", value);
          }
          setWeather(value);
        }}
        onBlur={() => runValidationTasks("weather", weather)}
        errorMessage={errors.weather?.errorMessage}
        hasError={errors.weather?.hasError}
        {...getOverrideProps(overrides, "weather")}
      ></TextField>
      <SelectField
        label="Region"
        placeholder="Please select an option"
        isDisabled={false}
        value={region}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              weather,
              region: value,
              country,
              degree,
              interest,
              userSub,
            };
            const result = onChange(modelFields);
            value = result?.region ?? value;
          }
          if (errors.region?.hasError) {
            runValidationTasks("region", value);
          }
          setRegion(value);
        }}
        onBlur={() => runValidationTasks("region", region)}
        errorMessage={errors.region?.errorMessage}
        hasError={errors.region?.hasError}
        {...getOverrideProps(overrides, "region")}
      >
        <option
          children="Europe"
          value="EUROPE"
          {...getOverrideProps(overrides, "regionoption0")}
        ></option>
        <option
          children="Asia"
          value="ASIA"
          {...getOverrideProps(overrides, "regionoption1")}
        ></option>
        <option
          children="Africa"
          value="AFRICA"
          {...getOverrideProps(overrides, "regionoption2")}
        ></option>
        <option
          children="Oceania"
          value="OCEANIA"
          {...getOverrideProps(overrides, "regionoption3")}
        ></option>
        <option
          children="Southamerica"
          value="SOUTHAMERICA"
          {...getOverrideProps(overrides, "regionoption4")}
        ></option>
        <option
          children="Northamerica"
          value="NORTHAMERICA"
          {...getOverrideProps(overrides, "regionoption5")}
        ></option>
      </SelectField>
      <TextField
        label="Country"
        isRequired={false}
        isReadOnly={false}
        value={country}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              weather,
              region,
              country: value,
              degree,
              interest,
              userSub,
            };
            const result = onChange(modelFields);
            value = result?.country ?? value;
          }
          if (errors.country?.hasError) {
            runValidationTasks("country", value);
          }
          setCountry(value);
        }}
        onBlur={() => runValidationTasks("country", country)}
        errorMessage={errors.country?.errorMessage}
        hasError={errors.country?.hasError}
        {...getOverrideProps(overrides, "country")}
      ></TextField>
      <TextField
        label="Degree"
        isRequired={false}
        isReadOnly={false}
        value={degree}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              weather,
              region,
              country,
              degree: value,
              interest,
              userSub,
            };
            const result = onChange(modelFields);
            value = result?.degree ?? value;
          }
          if (errors.degree?.hasError) {
            runValidationTasks("degree", value);
          }
          setDegree(value);
        }}
        onBlur={() => runValidationTasks("degree", degree)}
        errorMessage={errors.degree?.errorMessage}
        hasError={errors.degree?.hasError}
        {...getOverrideProps(overrides, "degree")}
      ></TextField>
      <TextField
        label="Interest"
        isRequired={false}
        isReadOnly={false}
        value={interest}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              weather,
              region,
              country,
              degree,
              interest: value,
              userSub,
            };
            const result = onChange(modelFields);
            value = result?.interest ?? value;
          }
          if (errors.interest?.hasError) {
            runValidationTasks("interest", value);
          }
          setInterest(value);
        }}
        onBlur={() => runValidationTasks("interest", interest)}
        errorMessage={errors.interest?.errorMessage}
        hasError={errors.interest?.hasError}
        {...getOverrideProps(overrides, "interest")}
      ></TextField>
      <TextField
        label="User sub"
        isRequired={false}
        isReadOnly={false}
        value={userSub}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              weather,
              region,
              country,
              degree,
              interest,
              userSub: value,
            };
            const result = onChange(modelFields);
            value = result?.userSub ?? value;
          }
          if (errors.userSub?.hasError) {
            runValidationTasks("userSub", value);
          }
          setUserSub(value);
        }}
        onBlur={() => runValidationTasks("userSub", userSub)}
        errorMessage={errors.userSub?.errorMessage}
        hasError={errors.userSub?.hasError}
        {...getOverrideProps(overrides, "userSub")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
