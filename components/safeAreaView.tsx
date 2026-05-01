import "@/global.css";
import { styled } from "nativewind";
import React, { PropsWithChildren } from "react";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const SafeAreaWrapper = ({ children }: PropsWithChildren) => {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">{children}</SafeAreaView>
  );
};

export default SafeAreaWrapper;
