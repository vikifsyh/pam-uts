import { View, Text, ActivityIndicator, Image, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    imageLinks?: {
      thumbnail: string;
    };
  };
}

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBooks = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=children+books"
      );
      const data = await response.json();

      // Filter buku yang memiliki gambar dan ambil hanya 6 buku
      const filteredBooks =
        data.items
          ?.filter((item: Book) => item.volumeInfo.imageLinks?.thumbnail)
          .slice(0, 6) || [];

      setBooks(filteredBooks);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching books:", error);
      setError("Failed to load books.");
      setLoading(false);
    }
  };

  // Panggil API ketika komponen dimuat
  useEffect(() => {
    fetchBooks();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View className="bg-white h-full">
      <ScrollView>
        <View className="bg-[#EBEFFF] h-[290px] rounded-b-[32px] px-5 justify-center">
          <View className="flex-row justify-between items-center w-full mt-10">
            <View className="flex-row items-center">
              <Image source={require("../../assets/images/avatar.png")} />
              <Text className="ml-3 font-bold text-lg">Nuzulia Safira</Text>
            </View>

            <Image
              className="w-10 h-[22px]"
              source={require("../../assets/images/logo.png")}
            />
          </View>

          <Image
            className="w-full h-auto rounded-xl mt-5"
            source={require("../../assets/images/carousel.png")}
          />
        </View>

        <View className="mx-5 ">
          <Text className="mt-10 text-lg font-bold">Rekomendasi Buku</Text>
          <View className="flex-row flex-wrap justify-between mt-5">
            {books.map((item) => (
              <View
                key={item.id}
                className="w-[48%] bg-white shadow-lg mb-4 items-center rounded-lg"
                style={{
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.5,
                  elevation: 1,
                }}
              >
                {/* Render gambar buku jika tersedia */}
                {item.volumeInfo.imageLinks?.thumbnail && (
                  <Image
                    source={{ uri: item.volumeInfo.imageLinks.thumbnail }}
                    style={{ width: 180, height: 220, marginBottom: 10 }}
                  />
                )}
                <View className="items-center p-1">
                  <Text className="font-bold text-center">
                    {item.volumeInfo.title}
                  </Text>
                  <Text className="text-sm text-center">
                    {item.volumeInfo.authors?.join(", ")}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
