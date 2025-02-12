import axios from "axios";
import { serverApi } from "../../lib/config";
import { Member } from "../../lib/types/member";

class MemberService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  public async getTopUsers(): Promise<Member[]> {
    try {
      const url = this.path + "/member/top-users";
      const result = await axios.get(url);
      console.log("getTopUsers:", result)

     return result.data
    } catch (err) {
      console.log("Error, getTopUsers", err);
      throw err;
    }
  }



  public async getRestaurant(): Promise<Member> {
    try {
      const url = this.path + "/member/restaurant";
      const result = await axios.get(url);
      console.log("getRestaurant:", result)

      const restaurant: Member = result.data
     return restaurant
    } catch (err) {
      console.log("Error, getRestaurant", err);
      throw err;
    }
  }
}

export default MemberService;
