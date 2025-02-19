import axios from "axios";
import { serverApi } from "../../lib/config";
import { LoginInput, Member, MemberInput } from "../../lib/types/member";

class MemberService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  public async getTopUsers(): Promise<Member[]> {
    try {
      const url = this.path + "/member/top-users";
      const result = await axios.get(url);
      console.log("getTopUsers:", result);

      return result.data;
    } catch (err) {
      console.log("Error, getTopUsers", err);
      throw err;
    }
  }

  public async getRestaurant(): Promise<Member> {
    try {
      const url = this.path + "/member/restaurant";
      const result = await axios.get(url);
      console.log("getRestaurant:", result);

      const restaurant: Member = result.data;
      return restaurant;
    } catch (err) {
      console.log("Error, getRestaurant", err);
      throw err;
    }
  }

  public async signup(input: MemberInput): Promise<Member> {
    try {
      const url = this.path + "/member/signup";
      const result = await axios.post(url, input, { withCredentials: true });
      console.log("signup:", result);

      const member: Member = result.data.member;
      console.log("member:", member);
      localStorage.setItem("memberData", JSON.stringify(member));

      return member;
    } catch (err) {
      console.log("signup, signup:", err);
      throw err;
    }
  }

  public async login (input: LoginInput): Promise<Member> {
    try {
      const url = this.path + "/member/login";
      const result = await axios.post(url, input, { withCredentials: true });
      console.log("login:", result);

      const member: Member = result.data.member;
      console.log("member:", member);
      localStorage.setItem("memberData", JSON.stringify(member));

      return member;
    } catch (err) {
      console.log("signup, login:", err);
      throw err;
    }
  }

  public async logout (): Promise<void> {
    try {
      const url = this.path + "/member/logout";
      const result = await axios.post(url, {}, { withCredentials: true });
      console.log("logout:", result);

      localStorage.removeItem("memberData");

    } catch (err) {
      console.log("signup, logout:", err);
      throw err;
    }
  }


}

export default MemberService;
