import SafeAreaWrapper from "@/components/safeAreaView";
import "@/global.css";
import { Link } from "expo-router";
import { Text } from "react-native";

export default function App() {
  return (
    <SafeAreaWrapper>
      <Text className="text-7xl font-sans-extrabold">Home</Text>
      <Link
        href={"/onboarding"}
        className="mt-4 bg-primary rounded text-white p-4 font-sans-bold"
      >
        Go to Onboarding
      </Link>
      <Link
        href={"/(auth)/sign-in"}
        className="mt-4 bg-primary rounded text-white p-4 font-sans-bold"
      >
        Go to Sign In
      </Link>
      <Link
        href={"/(auth)/sign-up"}
        className="mt-4 bg-primary rounded text-white p-4 font-sans-bold"
      >
        Go to Sign Up
      </Link>
    </SafeAreaWrapper>
  );
}
