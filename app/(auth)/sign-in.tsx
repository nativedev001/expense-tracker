import { Link } from "expo-router";
import { Text, View } from "react-native";

const SignIn = () => {
  return (
    <View>
      <Text>SignIn</Text>
      <Link
        href={"/(auth)/sign-up"}
        className="mt-4 bg-primary rounded text-white p-4"
      >
        Go to Sign Up
      </Link>
    </View>
  );
};

export default SignIn;
