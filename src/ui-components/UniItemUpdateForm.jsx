/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { UniItem } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function UniItemUpdateForm(props) {
  const {
    id: idProp,
    uniItem: uniItemModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    ranking: "",
    name: "",
    region: "",
    city: "",
    country: "",
    photo: "",
    description: "",
    address: "",
    website: "",
    phone: "",
    email: "",
    type: "",
    accreditation: "",
    weather: "",
    departments: [],
    price: "",
    enrollment: "",
    scholarships: [],
    requirements: [],
    stuff: "",
    acceptance_rate: "",
    isBolashakPartner: false,
    rate: "",
  };
  const [ranking, setRanking] = React.useState(initialValues.ranking);
  const [name, setName] = React.useState(initialValues.name);
  const [region, setRegion] = React.useState(initialValues.region);
  const [city, setCity] = React.useState(initialValues.city);
  const [country, setCountry] = React.useState(initialValues.country);
  const [photo, setPhoto] = React.useState(initialValues.photo);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [address, setAddress] = React.useState(initialValues.address);
  const [website, setWebsite] = React.useState(initialValues.website);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [email, setEmail] = React.useState(initialValues.email);
  const [type, setType] = React.useState(initialValues.type);
  const [accreditation, setAccreditation] = React.useState(
    initialValues.accreditation
  );
  const [weather, setWeather] = React.useState(initialValues.weather);
  const [departments, setDepartments] = React.useState(
    initialValues.departments
  );
  const [price, setPrice] = React.useState(initialValues.price);
  const [enrollment, setEnrollment] = React.useState(initialValues.enrollment);
  const [scholarships, setScholarships] = React.useState(
    initialValues.scholarships
  );
  const [requirements, setRequirements] = React.useState(
    initialValues.requirements
  );
  const [stuff, setStuff] = React.useState(initialValues.stuff);
  const [acceptance_rate, setAcceptance_rate] = React.useState(
    initialValues.acceptance_rate
  );
  const [isBolashakPartner, setIsBolashakPartner] = React.useState(
    initialValues.isBolashakPartner
  );
  const [rate, setRate] = React.useState(initialValues.rate);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = uniItemRecord
      ? { ...initialValues, ...uniItemRecord }
      : initialValues;
    setRanking(cleanValues.ranking);
    setName(cleanValues.name);
    setRegion(cleanValues.region);
    setCity(cleanValues.city);
    setCountry(cleanValues.country);
    setPhoto(cleanValues.photo);
    setDescription(cleanValues.description);
    setAddress(cleanValues.address);
    setWebsite(cleanValues.website);
    setPhone(cleanValues.phone);
    setEmail(cleanValues.email);
    setType(cleanValues.type);
    setAccreditation(cleanValues.accreditation);
    setWeather(cleanValues.weather);
    setDepartments(cleanValues.departments ?? []);
    setCurrentDepartmentsValue("");
    setPrice(cleanValues.price);
    setEnrollment(cleanValues.enrollment);
    setScholarships(cleanValues.scholarships ?? []);
    setCurrentScholarshipsValue("");
    setRequirements(cleanValues.requirements ?? []);
    setCurrentRequirementsValue("");
    setStuff(cleanValues.stuff);
    setAcceptance_rate(cleanValues.acceptance_rate);
    setIsBolashakPartner(cleanValues.isBolashakPartner);
    setRate(cleanValues.rate);
    setErrors({});
  };
  const [uniItemRecord, setUniItemRecord] = React.useState(uniItemModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(UniItem, idProp)
        : uniItemModelProp;
      setUniItemRecord(record);
    };
    queryData();
  }, [idProp, uniItemModelProp]);
  React.useEffect(resetStateValues, [uniItemRecord]);
  const [currentDepartmentsValue, setCurrentDepartmentsValue] =
    React.useState("");
  const departmentsRef = React.createRef();
  const [currentScholarshipsValue, setCurrentScholarshipsValue] =
    React.useState("");
  const scholarshipsRef = React.createRef();
  const [currentRequirementsValue, setCurrentRequirementsValue] =
    React.useState("");
  const requirementsRef = React.createRef();
  const validations = {
    ranking: [],
    name: [],
    region: [],
    city: [],
    country: [],
    photo: [{ type: "URL" }],
    description: [],
    address: [],
    website: [{ type: "URL" }],
    phone: [{ type: "Phone" }],
    email: [{ type: "Email" }],
    type: [],
    accreditation: [],
    weather: [],
    departments: [],
    price: [],
    enrollment: [],
    scholarships: [],
    requirements: [],
    stuff: [],
    acceptance_rate: [],
    isBolashakPartner: [],
    rate: [],
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
          ranking,
          name,
          region,
          city,
          country,
          photo,
          description,
          address,
          website,
          phone,
          email,
          type,
          accreditation,
          weather,
          departments,
          price,
          enrollment,
          scholarships,
          requirements,
          stuff,
          acceptance_rate,
          isBolashakPartner,
          rate,
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
          await DataStore.save(
            UniItem.copyOf(uniItemRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "UniItemUpdateForm")}
      {...rest}
    >
      <TextField
        label="Ranking"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={ranking}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              ranking: value,
              name,
              region,
              city,
              country,
              photo,
              description,
              address,
              website,
              phone,
              email,
              type,
              accreditation,
              weather,
              departments,
              price,
              enrollment,
              scholarships,
              requirements,
              stuff,
              acceptance_rate,
              isBolashakPartner,
              rate,
            };
            const result = onChange(modelFields);
            value = result?.ranking ?? value;
          }
          if (errors.ranking?.hasError) {
            runValidationTasks("ranking", value);
          }
          setRanking(value);
        }}
        onBlur={() => runValidationTasks("ranking", ranking)}
        errorMessage={errors.ranking?.errorMessage}
        hasError={errors.ranking?.hasError}
        {...getOverrideProps(overrides, "ranking")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ranking,
              name: value,
              region,
              city,
              country,
              photo,
              description,
              address,
              website,
              phone,
              email,
              type,
              accreditation,
              weather,
              departments,
              price,
              enrollment,
              scholarships,
              requirements,
              stuff,
              acceptance_rate,
              isBolashakPartner,
              rate,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Region"
        isRequired={false}
        isReadOnly={false}
        value={region}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ranking,
              name,
              region: value,
              city,
              country,
              photo,
              description,
              address,
              website,
              phone,
              email,
              type,
              accreditation,
              weather,
              departments,
              price,
              enrollment,
              scholarships,
              requirements,
              stuff,
              acceptance_rate,
              isBolashakPartner,
              rate,
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
      ></TextField>
      <TextField
        label="City"
        isRequired={false}
        isReadOnly={false}
        value={city}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ranking,
              name,
              region,
              city: value,
              country,
              photo,
              description,
              address,
              website,
              phone,
              email,
              type,
              accreditation,
              weather,
              departments,
              price,
              enrollment,
              scholarships,
              requirements,
              stuff,
              acceptance_rate,
              isBolashakPartner,
              rate,
            };
            const result = onChange(modelFields);
            value = result?.city ?? value;
          }
          if (errors.city?.hasError) {
            runValidationTasks("city", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("city", city)}
        errorMessage={errors.city?.errorMessage}
        hasError={errors.city?.hasError}
        {...getOverrideProps(overrides, "city")}
      ></TextField>
      <TextField
        label="Country"
        isRequired={false}
        isReadOnly={false}
        value={country}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ranking,
              name,
              region,
              city,
              country: value,
              photo,
              description,
              address,
              website,
              phone,
              email,
              type,
              accreditation,
              weather,
              departments,
              price,
              enrollment,
              scholarships,
              requirements,
              stuff,
              acceptance_rate,
              isBolashakPartner,
              rate,
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
        label="Photo"
        isRequired={false}
        isReadOnly={false}
        value={photo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ranking,
              name,
              region,
              city,
              country,
              photo: value,
              description,
              address,
              website,
              phone,
              email,
              type,
              accreditation,
              weather,
              departments,
              price,
              enrollment,
              scholarships,
              requirements,
              stuff,
              acceptance_rate,
              isBolashakPartner,
              rate,
            };
            const result = onChange(modelFields);
            value = result?.photo ?? value;
          }
          if (errors.photo?.hasError) {
            runValidationTasks("photo", value);
          }
          setPhoto(value);
        }}
        onBlur={() => runValidationTasks("photo", photo)}
        errorMessage={errors.photo?.errorMessage}
        hasError={errors.photo?.hasError}
        {...getOverrideProps(overrides, "photo")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ranking,
              name,
              region,
              city,
              country,
              photo,
              description: value,
              address,
              website,
              phone,
              email,
              type,
              accreditation,
              weather,
              departments,
              price,
              enrollment,
              scholarships,
              requirements,
              stuff,
              acceptance_rate,
              isBolashakPartner,
              rate,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Address"
        isRequired={false}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ranking,
              name,
              region,
              city,
              country,
              photo,
              description,
              address: value,
              website,
              phone,
              email,
              type,
              accreditation,
              weather,
              departments,
              price,
              enrollment,
              scholarships,
              requirements,
              stuff,
              acceptance_rate,
              isBolashakPartner,
              rate,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextField>
      <TextField
        label="Website"
        isRequired={false}
        isReadOnly={false}
        value={website}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ranking,
              name,
              region,
              city,
              country,
              photo,
              description,
              address,
              website: value,
              phone,
              email,
              type,
              accreditation,
              weather,
              departments,
              price,
              enrollment,
              scholarships,
              requirements,
              stuff,
              acceptance_rate,
              isBolashakPartner,
              rate,
            };
            const result = onChange(modelFields);
            value = result?.website ?? value;
          }
          if (errors.website?.hasError) {
            runValidationTasks("website", value);
          }
          setWebsite(value);
        }}
        onBlur={() => runValidationTasks("website", website)}
        errorMessage={errors.website?.errorMessage}
        hasError={errors.website?.hasError}
        {...getOverrideProps(overrides, "website")}
      ></TextField>
      <TextField
        label="Phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ranking,
              name,
              region,
              city,
              country,
              photo,
              description,
              address,
              website,
              phone: value,
              email,
              type,
              accreditation,
              weather,
              departments,
              price,
              enrollment,
              scholarships,
              requirements,
              stuff,
              acceptance_rate,
              isBolashakPartner,
              rate,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ranking,
              name,
              region,
              city,
              country,
              photo,
              description,
              address,
              website,
              phone,
              email: value,
              type,
              accreditation,
              weather,
              departments,
              price,
              enrollment,
              scholarships,
              requirements,
              stuff,
              acceptance_rate,
              isBolashakPartner,
              rate,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Type"
        isRequired={false}
        isReadOnly={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ranking,
              name,
              region,
              city,
              country,
              photo,
              description,
              address,
              website,
              phone,
              email,
              type: value,
              accreditation,
              weather,
              departments,
              price,
              enrollment,
              scholarships,
              requirements,
              stuff,
              acceptance_rate,
              isBolashakPartner,
              rate,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      ></TextField>
      <TextField
        label="Accreditation"
        isRequired={false}
        isReadOnly={false}
        value={accreditation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ranking,
              name,
              region,
              city,
              country,
              photo,
              description,
              address,
              website,
              phone,
              email,
              type,
              accreditation: value,
              weather,
              departments,
              price,
              enrollment,
              scholarships,
              requirements,
              stuff,
              acceptance_rate,
              isBolashakPartner,
              rate,
            };
            const result = onChange(modelFields);
            value = result?.accreditation ?? value;
          }
          if (errors.accreditation?.hasError) {
            runValidationTasks("accreditation", value);
          }
          setAccreditation(value);
        }}
        onBlur={() => runValidationTasks("accreditation", accreditation)}
        errorMessage={errors.accreditation?.errorMessage}
        hasError={errors.accreditation?.hasError}
        {...getOverrideProps(overrides, "accreditation")}
      ></TextField>
      <TextField
        label="Weather"
        isRequired={false}
        isReadOnly={false}
        value={weather}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ranking,
              name,
              region,
              city,
              country,
              photo,
              description,
              address,
              website,
              phone,
              email,
              type,
              accreditation,
              weather: value,
              departments,
              price,
              enrollment,
              scholarships,
              requirements,
              stuff,
              acceptance_rate,
              isBolashakPartner,
              rate,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              ranking,
              name,
              region,
              city,
              country,
              photo,
              description,
              address,
              website,
              phone,
              email,
              type,
              accreditation,
              weather,
              departments: values,
              price,
              enrollment,
              scholarships,
              requirements,
              stuff,
              acceptance_rate,
              isBolashakPartner,
              rate,
            };
            const result = onChange(modelFields);
            values = result?.departments ?? values;
          }
          setDepartments(values);
          setCurrentDepartmentsValue("");
        }}
        currentFieldValue={currentDepartmentsValue}
        label={"Departments"}
        items={departments}
        hasError={errors?.departments?.hasError}
        errorMessage={errors?.departments?.errorMessage}
        setFieldValue={setCurrentDepartmentsValue}
        inputFieldRef={departmentsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Departments"
          isRequired={false}
          isReadOnly={false}
          value={currentDepartmentsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.departments?.hasError) {
              runValidationTasks("departments", value);
            }
            setCurrentDepartmentsValue(value);
          }}
          onBlur={() =>
            runValidationTasks("departments", currentDepartmentsValue)
          }
          errorMessage={errors.departments?.errorMessage}
          hasError={errors.departments?.hasError}
          ref={departmentsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "departments")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={price}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              ranking,
              name,
              region,
              city,
              country,
              photo,
              description,
              address,
              website,
              phone,
              email,
              type,
              accreditation,
              weather,
              departments,
              price: value,
              enrollment,
              scholarships,
              requirements,
              stuff,
              acceptance_rate,
              isBolashakPartner,
              rate,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      ></TextField>
      <TextField
        label="Enrollment"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={enrollment}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              ranking,
              name,
              region,
              city,
              country,
              photo,
              description,
              address,
              website,
              phone,
              email,
              type,
              accreditation,
              weather,
              departments,
              price,
              enrollment: value,
              scholarships,
              requirements,
              stuff,
              acceptance_rate,
              isBolashakPartner,
              rate,
            };
            const result = onChange(modelFields);
            value = result?.enrollment ?? value;
          }
          if (errors.enrollment?.hasError) {
            runValidationTasks("enrollment", value);
          }
          setEnrollment(value);
        }}
        onBlur={() => runValidationTasks("enrollment", enrollment)}
        errorMessage={errors.enrollment?.errorMessage}
        hasError={errors.enrollment?.hasError}
        {...getOverrideProps(overrides, "enrollment")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              ranking,
              name,
              region,
              city,
              country,
              photo,
              description,
              address,
              website,
              phone,
              email,
              type,
              accreditation,
              weather,
              departments,
              price,
              enrollment,
              scholarships: values,
              requirements,
              stuff,
              acceptance_rate,
              isBolashakPartner,
              rate,
            };
            const result = onChange(modelFields);
            values = result?.scholarships ?? values;
          }
          setScholarships(values);
          setCurrentScholarshipsValue("");
        }}
        currentFieldValue={currentScholarshipsValue}
        label={"Scholarships"}
        items={scholarships}
        hasError={errors?.scholarships?.hasError}
        errorMessage={errors?.scholarships?.errorMessage}
        setFieldValue={setCurrentScholarshipsValue}
        inputFieldRef={scholarshipsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Scholarships"
          isRequired={false}
          isReadOnly={false}
          value={currentScholarshipsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.scholarships?.hasError) {
              runValidationTasks("scholarships", value);
            }
            setCurrentScholarshipsValue(value);
          }}
          onBlur={() =>
            runValidationTasks("scholarships", currentScholarshipsValue)
          }
          errorMessage={errors.scholarships?.errorMessage}
          hasError={errors.scholarships?.hasError}
          ref={scholarshipsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "scholarships")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              ranking,
              name,
              region,
              city,
              country,
              photo,
              description,
              address,
              website,
              phone,
              email,
              type,
              accreditation,
              weather,
              departments,
              price,
              enrollment,
              scholarships,
              requirements: values,
              stuff,
              acceptance_rate,
              isBolashakPartner,
              rate,
            };
            const result = onChange(modelFields);
            values = result?.requirements ?? values;
          }
          setRequirements(values);
          setCurrentRequirementsValue("");
        }}
        currentFieldValue={currentRequirementsValue}
        label={"Requirements"}
        items={requirements}
        hasError={errors?.requirements?.hasError}
        errorMessage={errors?.requirements?.errorMessage}
        setFieldValue={setCurrentRequirementsValue}
        inputFieldRef={requirementsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Requirements"
          isRequired={false}
          isReadOnly={false}
          value={currentRequirementsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.requirements?.hasError) {
              runValidationTasks("requirements", value);
            }
            setCurrentRequirementsValue(value);
          }}
          onBlur={() =>
            runValidationTasks("requirements", currentRequirementsValue)
          }
          errorMessage={errors.requirements?.errorMessage}
          hasError={errors.requirements?.hasError}
          ref={requirementsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "requirements")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Stuff"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={stuff}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              ranking,
              name,
              region,
              city,
              country,
              photo,
              description,
              address,
              website,
              phone,
              email,
              type,
              accreditation,
              weather,
              departments,
              price,
              enrollment,
              scholarships,
              requirements,
              stuff: value,
              acceptance_rate,
              isBolashakPartner,
              rate,
            };
            const result = onChange(modelFields);
            value = result?.stuff ?? value;
          }
          if (errors.stuff?.hasError) {
            runValidationTasks("stuff", value);
          }
          setStuff(value);
        }}
        onBlur={() => runValidationTasks("stuff", stuff)}
        errorMessage={errors.stuff?.errorMessage}
        hasError={errors.stuff?.hasError}
        {...getOverrideProps(overrides, "stuff")}
      ></TextField>
      <TextField
        label="Acceptance rate"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={acceptance_rate}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              ranking,
              name,
              region,
              city,
              country,
              photo,
              description,
              address,
              website,
              phone,
              email,
              type,
              accreditation,
              weather,
              departments,
              price,
              enrollment,
              scholarships,
              requirements,
              stuff,
              acceptance_rate: value,
              isBolashakPartner,
              rate,
            };
            const result = onChange(modelFields);
            value = result?.acceptance_rate ?? value;
          }
          if (errors.acceptance_rate?.hasError) {
            runValidationTasks("acceptance_rate", value);
          }
          setAcceptance_rate(value);
        }}
        onBlur={() => runValidationTasks("acceptance_rate", acceptance_rate)}
        errorMessage={errors.acceptance_rate?.errorMessage}
        hasError={errors.acceptance_rate?.hasError}
        {...getOverrideProps(overrides, "acceptance_rate")}
      ></TextField>
      <SwitchField
        label="Is bolashak partner"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isBolashakPartner}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              ranking,
              name,
              region,
              city,
              country,
              photo,
              description,
              address,
              website,
              phone,
              email,
              type,
              accreditation,
              weather,
              departments,
              price,
              enrollment,
              scholarships,
              requirements,
              stuff,
              acceptance_rate,
              isBolashakPartner: value,
              rate,
            };
            const result = onChange(modelFields);
            value = result?.isBolashakPartner ?? value;
          }
          if (errors.isBolashakPartner?.hasError) {
            runValidationTasks("isBolashakPartner", value);
          }
          setIsBolashakPartner(value);
        }}
        onBlur={() =>
          runValidationTasks("isBolashakPartner", isBolashakPartner)
        }
        errorMessage={errors.isBolashakPartner?.errorMessage}
        hasError={errors.isBolashakPartner?.hasError}
        {...getOverrideProps(overrides, "isBolashakPartner")}
      ></SwitchField>
      <TextField
        label="Rate"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={rate}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              ranking,
              name,
              region,
              city,
              country,
              photo,
              description,
              address,
              website,
              phone,
              email,
              type,
              accreditation,
              weather,
              departments,
              price,
              enrollment,
              scholarships,
              requirements,
              stuff,
              acceptance_rate,
              isBolashakPartner,
              rate: value,
            };
            const result = onChange(modelFields);
            value = result?.rate ?? value;
          }
          if (errors.rate?.hasError) {
            runValidationTasks("rate", value);
          }
          setRate(value);
        }}
        onBlur={() => runValidationTasks("rate", rate)}
        errorMessage={errors.rate?.errorMessage}
        hasError={errors.rate?.hasError}
        {...getOverrideProps(overrides, "rate")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || uniItemModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || uniItemModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
