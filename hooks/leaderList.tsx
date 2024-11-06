"use client";
import { useState, useEffect } from "react";
export interface LeaderFromHooks {
  name: string;
  src: string;
  alt: string;
  quote: string;
  position: string;
  experience: string;
}

const leaderList = () => {
  const [leaderList, setLeaderList] = useState<LeaderFromHooks[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);
  useEffect(() => {
    const fetchLeaderList = async () => {
      try {
        setLoading(true);

        //const storedLeaderList = localStorage.getItem("LeaderList");
        const storedLeaderList = localStorage.getItem("LeaderList");
        if (storedLeaderList) {
          setLeaderList(JSON.parse(storedLeaderList));
          setLoading(false);
          return;
        }
        const response = await fetch("https://kukilabs.id/api/api.php");
        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }
        const data = await response.json();

        const leaderData: LeaderFromHooks[] = data.dataList.map((item: any) => {
          return {
            name: item.name,
            src: item.picture,
            alt: item.alt,
            quote: item.quote,
            position: item.position,
            experience: item.experience,
          };
        });

        setLeaderList(leaderData);
        localStorage.setItem("leaderList", JSON.stringify(leaderData));
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchLeaderList();
  }, []);
  return { leaderList, loading, error };
};

export default leaderList;
