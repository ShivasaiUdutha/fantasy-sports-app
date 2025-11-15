export const getPlayers = async () => {
  const res = await fetch('https://leaguex.s3.ap-south-1.amazonaws.com/task/fantasy-sports/Get_All_Players_of_match.json')
  return res.json()
}
