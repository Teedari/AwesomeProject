import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import globalStyles from "../../styles/global.styles";
import { Formik } from "formik";

const CreateReviewForm = ({onSubmitHandler}) => {
  const initialValues = { title: "", content: "", rating: "" };
  return (
    <View>
      <Formik 
        initialValues={initialValues} 
        onSubmit={(values,{resetForm}) => {
          console.log(values)
          onSubmitHandler(values.title, values.content, values.rating)
          // setSubmitting(true)
          resetForm()
        }}
      >
        {(formik) => (
          <View>
            <View styles={globalStyles.formGroup}>
              <Text style={globalStyles.h4}>Title</Text>
              <TextInput
                style={globalStyles.input}
                placeholder="Enter title..."
                onChangeText={formik.handleChange("title")}
                value={formik.values.title}
              />
            </View>
            <View styles={globalStyles.formGroup}>
              <Text style={globalStyles.h4}>Content</Text>
              <TextInput
                multiline
                style={globalStyles.inputTextArea}
                placeholder="Enter content..."
                onChangeText={formik.handleChange("content")}
                value={formik.values.content}
              />
            </View>
            <View styles={globalStyles.formGroup}>
              <Text style={globalStyles.h4}>Rating</Text>
              <TextInput
                keyboardType="numeric"
                style={globalStyles.input}
                placeholder="Enter rating, e.g (1-5)..."
                onChangeText={formik.handleChange("rating")}
                value={formik.values?.rating}
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <Button onPress={formik.handleSubmit} title="Save" color="#00B6FF" />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default CreateReviewForm;
