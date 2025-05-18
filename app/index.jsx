import {
  Text,
  ScrollView,
  SafeAreaView,
  Pressable,
  Linking,
} from "react-native";

const Index = () => {
  const openGitHub = () => {
    Linking.openURL("https://github.com/ahmedayman305");
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-600">
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 24,
        }}
      >
        <Text className="text-3xl font-bold text-white mb-6">Hai...</Text>

        <Text className="text-lg text-white text-center leading-relaxed">
          I made this template to help developers skip the issues of installing
        </Text>
        <Text className="text-lg text-white text-center my-8">
          NativeWind + Expo Router.
        </Text>

        <Pressable
          onPress={openGitHub}
          className="bg-white px-6 py-3 rounded-full shadow-lg"
        >
          <Text className="text-slate-700 font-semibold text-lg">
            Visit My GitHub
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
