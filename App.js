import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, FlatList, View, Button, Text } from "react-native";
import CourseInput from "./components/CourseInput";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [course, setCourse] = useState([]);

  const startModal = () => {
    setModalVisible(true);
  };

  const endModal = () => {
    setModalVisible(false);
  };

  const addCourse = (courseTitle) => {
    setCourse((currentCourses) => [
      ...currentCourses,
      { text: courseTitle, id: Math.random().toString() },
    ]);
    endModal();
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button title="Kurs Ekle" color="red" onPress={startModal} />
        <CourseInput
          visible={modalVisible}
          onCancel={endModal}
          onAddCourse={addCourse}
        />
        <View>
          <FlatList
            data={course}
            renderItem={({ item }) => (
              <View style={styles.courseItem}>
                <Text style={styles.courseText}>{item.text}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  courseItem: { backgroundColor: "gray", margin: 8, borderRadius: 5 },
  courseText: { padding: 8, color: "white" },
});
