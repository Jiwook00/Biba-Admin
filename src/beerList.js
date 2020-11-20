import * as React from "react";

import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  NumberField,
  DateField,
  Filter,
  TextInput,
  EditButton,
  Show,
  SimpleShowLayout,
  ImageField,
} from "react-admin";

const BeerFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
  </Filter>
);

export const BeerlistShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      {/* <TextField source="beer_name" />
      <TextField source="beer_name_en" /> */}
      <TextField source="search_word" />
      {/* <TextField source="beer_img" /> */}
      {/* <NumberField source="abv" />
      <NumberField source="ibu" /> */}
      {/* <ReferenceField source="style_id" reference="styles">
        <TextField source="id" />
      </ReferenceField>
      <ReferenceField source="company_id" reference="companies">
        <TextField source="id" />
      </ReferenceField>
      <ReferenceField source="country_id" reference="countries">
        <TextField source="id" />
      </ReferenceField> */}
      {/* <NumberField source="rate" /> */}
      <TextField source="story" />
      <TextField source="explain" />
      {/* <TextField source="source" /> */}
      {/* <TextField source="poster" /> */}
      <ImageField source="poster" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </SimpleShowLayout>
  </Show>
);

export const BeerList = (props) => (
  <List {...props} filters={<BeerFilter />}>
    <Datagrid rowClick="edit" expand={<BeerlistShow />}>
      <TextField source="id" />
      <TextField source="beer_name" />
      <TextField source="beer_name_en" />
      {/* <TextField source="search_word" /> */}
      <ImageField source="beer_img" />
      <NumberField source="abv" />
      <NumberField source="ibu" />
      <NumberField source="style_id" />
      <NumberField source="company_id" />
      <NumberField source="country_id" />
      <NumberField source="rate" />
      {/* <TextField source="story" /> */}
      {/* <TextField source="explain" /> */}
      {/* <MyUrlField source="source" /> */}
      {/* <ImageField source="poster" /> */}
      {/* <DateField source="createdAt" />
      <DateField source="updatedAt" /> */}
      <EditButton />
      {/* <DeleteButton /> */}
    </Datagrid>
  </List>
);
