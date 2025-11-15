export const getUpcomingMatches = async () => {
  const res = await fetch('https://leaguex.s3.ap-south-1.amazonaws.com/task/fantasy-sports/Get_All_upcoming_Matches.json')
  return res.json()
}
