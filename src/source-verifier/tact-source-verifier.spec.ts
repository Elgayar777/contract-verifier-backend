import { TactSourceVerifier } from "./tact-source-verifier";

const pkg =
  "eyJuYW1lIjoiRWNobyIsImNvZGUiOiJ0ZTZjY2dFQ0VBRUFBczBBQVJUL0FQU2tFL1M4OHNnTEFRSUJZZ0lEQXVyUUFkRFRBd0Z4c01BQmtYK1JjT0lCK2tBQklOZEpnUUVMdXZMZ2lDRFhDd29nZ3dtNklZRUUvN3F4OHVDSWd3bTY4dUNKVkZCVEEyOEUrR0VDK0dMdFJORFVBZmhqMGdBQmtqQnRqcFg0S05jTENvTUp1dkxnaVlFQkFkY0FBUUhSMnp6aVdkczhNRERJK0VNQnpIOEJ5Z0RKN1ZRTkJBSUJXQXNNQTE3dG91MzdjQ0hYU2NJZmxUQWcxd3NmM2dLU1czL2dBY0FBanhNZzEwbkNINDhMZ0NEWElkczgyengvMnpIZzNnVUlCZ0ZDeUhBQnl4OXZBQUZ2akcxdmpBSGJQRzhpQWNtVElXNnpsZ0Z2SWxuTXllZ3hEd0lLMnp6YlBIOEhDQUFLeUFIUEZza0JHbi80UW5CWUE0QkNBVzF0Mnp3SkFjN0ljUUhLQVZBSEFjb0FjQUhLQWxBRklOZEpnUUVMdXZMZ2lDRFhDd29nZ3dtNklZRUUvN3F4OHVDSWd3bTY4dUNKenhaUUEvb0NjQUhLYUNOdXN5VnVzN0dYTXpNQmNBSEtBT01OSVc2em5IOEJ5Z0FCSUc3eTBJQUJ6SlV4Y0FIS0FPTEpBZnNBQ2dDWWZ3SEtBTWh3QWNvQWNBSEtBQ1J1czUxL0Fjb0FCQ0J1OHRDQVVBVE1salFEY0FIS0FPSWtick9kZndIS0FBUWdidkxRZ0ZBRXpKWTBBM0FCeWdEaWNBSEtBQUovQWNvQUFzbFl6QUNWdTcwWUp3WE93OVhTeXVleDZFN0RuV1NvVWJab0p3bmRZMUxTdGtmTE1pMDY4dC9mRmlPWUp3SUZYQUc0Qm5ZNVRPV0RxdVJ5V3l3NEp3blpkT1dyTk95M002RHBadGxHYm9wSUFsVzROaTdVVFExQUg0WTlJQUFaSXdiWTZWK0NqWEN3cURDYnJ5NEltQkFRSFhBQUVCMGRzODRnSGJQSURRNEFCREJ0QWxReHlHOEFBVytNYlcrTWkzU0dWc2JHOHNJSTJ6d0Iyenh2SWdISmt5RnVzNVlCYnlKWnpNbm9NZEFQRHdDNklOZEtJZGRKbHlEQ0FDTENBTEdPU2dOdklvQi9Jczh4cXdLaEJhc0NVVlcyQ0NEQ0FKd2dxZ0lWMXhoUU04OFdRQlRlV1c4Q1UwR2h3Z0NaeUFGdkFsQkVvYW9DamhJeE04SUFtZFF3MENEWFNpSFhTWkp3SU9MaTZGOEQiLCJhYmkiOiJ7XCJuYW1lXCI6XCJFY2hvXCIsXCJ0eXBlc1wiOlt7XCJuYW1lXCI6XCJTdGF0ZUluaXRcIixcImhlYWRlclwiOm51bGwsXCJmaWVsZHNcIjpbe1wibmFtZVwiOlwiY29kZVwiLFwidHlwZVwiOntcImtpbmRcIjpcInNpbXBsZVwiLFwidHlwZVwiOlwiY2VsbFwiLFwib3B0aW9uYWxcIjpmYWxzZX19LHtcIm5hbWVcIjpcImRhdGFcIixcInR5cGVcIjp7XCJraW5kXCI6XCJzaW1wbGVcIixcInR5cGVcIjpcImNlbGxcIixcIm9wdGlvbmFsXCI6ZmFsc2V9fV19LHtcIm5hbWVcIjpcIkNvbnRleHRcIixcImhlYWRlclwiOm51bGwsXCJmaWVsZHNcIjpbe1wibmFtZVwiOlwiYm91bmNlZFwiLFwidHlwZVwiOntcImtpbmRcIjpcInNpbXBsZVwiLFwidHlwZVwiOlwiYm9vbFwiLFwib3B0aW9uYWxcIjpmYWxzZX19LHtcIm5hbWVcIjpcInNlbmRlclwiLFwidHlwZVwiOntcImtpbmRcIjpcInNpbXBsZVwiLFwidHlwZVwiOlwiYWRkcmVzc1wiLFwib3B0aW9uYWxcIjpmYWxzZX19LHtcIm5hbWVcIjpcInZhbHVlXCIsXCJ0eXBlXCI6e1wia2luZFwiOlwic2ltcGxlXCIsXCJ0eXBlXCI6XCJpbnRcIixcIm9wdGlvbmFsXCI6ZmFsc2UsXCJmb3JtYXRcIjoyNTd9fSx7XCJuYW1lXCI6XCJyYXdcIixcInR5cGVcIjp7XCJraW5kXCI6XCJzaW1wbGVcIixcInR5cGVcIjpcInNsaWNlXCIsXCJvcHRpb25hbFwiOmZhbHNlfX1dfSx7XCJuYW1lXCI6XCJTZW5kUGFyYW1ldGVyc1wiLFwiaGVhZGVyXCI6bnVsbCxcImZpZWxkc1wiOlt7XCJuYW1lXCI6XCJib3VuY2VcIixcInR5cGVcIjp7XCJraW5kXCI6XCJzaW1wbGVcIixcInR5cGVcIjpcImJvb2xcIixcIm9wdGlvbmFsXCI6ZmFsc2V9fSx7XCJuYW1lXCI6XCJ0b1wiLFwidHlwZVwiOntcImtpbmRcIjpcInNpbXBsZVwiLFwidHlwZVwiOlwiYWRkcmVzc1wiLFwib3B0aW9uYWxcIjpmYWxzZX19LHtcIm5hbWVcIjpcInZhbHVlXCIsXCJ0eXBlXCI6e1wia2luZFwiOlwic2ltcGxlXCIsXCJ0eXBlXCI6XCJpbnRcIixcIm9wdGlvbmFsXCI6ZmFsc2UsXCJmb3JtYXRcIjoyNTd9fSx7XCJuYW1lXCI6XCJtb2RlXCIsXCJ0eXBlXCI6e1wia2luZFwiOlwic2ltcGxlXCIsXCJ0eXBlXCI6XCJpbnRcIixcIm9wdGlvbmFsXCI6ZmFsc2UsXCJmb3JtYXRcIjoyNTd9fSx7XCJuYW1lXCI6XCJib2R5XCIsXCJ0eXBlXCI6e1wia2luZFwiOlwic2ltcGxlXCIsXCJ0eXBlXCI6XCJjZWxsXCIsXCJvcHRpb25hbFwiOnRydWV9fSx7XCJuYW1lXCI6XCJjb2RlXCIsXCJ0eXBlXCI6e1wia2luZFwiOlwic2ltcGxlXCIsXCJ0eXBlXCI6XCJjZWxsXCIsXCJvcHRpb25hbFwiOnRydWV9fSx7XCJuYW1lXCI6XCJkYXRhXCIsXCJ0eXBlXCI6e1wia2luZFwiOlwic2ltcGxlXCIsXCJ0eXBlXCI6XCJjZWxsXCIsXCJvcHRpb25hbFwiOnRydWV9fV19XSxcInJlY2VpdmVyc1wiOlt7XCJyZWNlaXZlclwiOlwiaW50ZXJuYWxcIixcIm1lc3NhZ2VcIjp7XCJraW5kXCI6XCJ0ZXh0XCJ9fSx7XCJyZWNlaXZlclwiOlwiaW50ZXJuYWxcIixcIm1lc3NhZ2VcIjp7XCJraW5kXCI6XCJhbnlcIn19XSxcImdldHRlcnNcIjpbe1wibmFtZVwiOlwiaGVsbG9cIixcImFyZ3VtZW50c1wiOlt7XCJuYW1lXCI6XCJzcmNcIixcInR5cGVcIjp7XCJraW5kXCI6XCJzaW1wbGVcIixcInR5cGVcIjpcInN0cmluZ1wiLFwib3B0aW9uYWxcIjpmYWxzZX19XSxcInJldHVyblR5cGVcIjp7XCJraW5kXCI6XCJzaW1wbGVcIixcInR5cGVcIjpcInN0cmluZ1wiLFwib3B0aW9uYWxcIjpmYWxzZX19XSxcImVycm9yc1wiOntcIjJcIjp7XCJtZXNzYWdlXCI6XCJTdGFjayB1bmRlZmxvd1wifSxcIjNcIjp7XCJtZXNzYWdlXCI6XCJTdGFjayBvdmVyZmxvd1wifSxcIjRcIjp7XCJtZXNzYWdlXCI6XCJJbnRlZ2VyIG92ZXJmbG93XCJ9LFwiNVwiOntcIm1lc3NhZ2VcIjpcIkludGVnZXIgb3V0IG9mIGV4cGVjdGVkIHJhbmdlXCJ9LFwiNlwiOntcIm1lc3NhZ2VcIjpcIkludmFsaWQgb3Bjb2RlXCJ9LFwiN1wiOntcIm1lc3NhZ2VcIjpcIlR5cGUgY2hlY2sgZXJyb3JcIn0sXCI4XCI6e1wibWVzc2FnZVwiOlwiQ2VsbCBvdmVyZmxvd1wifSxcIjlcIjp7XCJtZXNzYWdlXCI6XCJDZWxsIHVuZGVyZmxvd1wifSxcIjEwXCI6e1wibWVzc2FnZVwiOlwiRGljdGlvbmFyeSBlcnJvclwifSxcIjEzXCI6e1wibWVzc2FnZVwiOlwiT3V0IG9mIGdhcyBlcnJvclwifSxcIjMyXCI6e1wibWVzc2FnZVwiOlwiTWV0aG9kIElEIG5vdCBmb3VuZFwifSxcIjM0XCI6e1wibWVzc2FnZVwiOlwiQWN0aW9uIGlzIGludmFsaWQgb3Igbm90IHN1cHBvcnRlZFwifSxcIjM3XCI6e1wibWVzc2FnZVwiOlwiTm90IGVub3VnaCBUT05cIn0sXCIzOFwiOntcIm1lc3NhZ2VcIjpcIk5vdCBlbm91Z2ggZXh0cmEtY3VycmVuY2llc1wifSxcIjEyOFwiOntcIm1lc3NhZ2VcIjpcIk51bGwgcmVmZXJlbmNlIGV4Y2VwdGlvblwifSxcIjEyOVwiOntcIm1lc3NhZ2VcIjpcIkludmFsaWQgc2VyaWFsaXphdGlvbiBwcmVmaXhcIn0sXCIxMzBcIjp7XCJtZXNzYWdlXCI6XCJJbnZhbGlkIGluY29taW5nIG1lc3NhZ2VcIn0sXCIxMzFcIjp7XCJtZXNzYWdlXCI6XCJDb25zdHJhaW50cyBlcnJvclwifSxcIjEzMlwiOntcIm1lc3NhZ2VcIjpcIkFjY2VzcyBkZW5pZWRcIn0sXCIxMzNcIjp7XCJtZXNzYWdlXCI6XCJDb250cmFjdCBzdG9wcGVkXCJ9LFwiMTM0XCI6e1wibWVzc2FnZVwiOlwiSW52YWxpZCBhcmd1bWVudFwifSxcIjEzNVwiOntcIm1lc3NhZ2VcIjpcIkNvZGUgb2YgYSBjb250cmFjdCB3YXMgbm90IGZvdW5kXCJ9LFwiMTM2XCI6e1wibWVzc2FnZVwiOlwiSW52YWxpZCBhZGRyZXNzXCJ9LFwiMTM3XCI6e1wibWVzc2FnZVwiOlwiTWFzdGVyY2hhaW4gc3VwcG9ydCBpcyBub3QgZW5hYmxlZCBmb3IgdGhpcyBjb250cmFjdFwifX0sXCJpbnRlcmZhY2VzXCI6W1wib3JnLnRvbi5pbnRyb3NwZWN0aW9uLnYwXCIsXCJvcmcudG9uLmFiaS5pcGZzLnYwXCIsXCJvcmcudG9uLmRlcGxveS5sYXp5LnYwXCIsXCJvcmcudG9uLmNoYWluLndvcmtjaGFpbi52MFwiXX0iLCJpbml0Ijp7ImtpbmQiOiJkaXJlY3QiLCJhcmdzIjpbeyJuYW1lIjoiYSIsInR5cGUiOnsia2luZCI6InNpbXBsZSIsInR5cGUiOiJpbnQiLCJvcHRpb25hbCI6ZmFsc2UsImZvcm1hdCI6MjU3fX1dLCJwcmVmaXgiOnsiYml0cyI6MSwidmFsdWUiOjB9LCJkZXBsb3ltZW50Ijp7ImtpbmQiOiJzeXN0ZW0tY2VsbCIsInN5c3RlbSI6InRlNmNja0VDRWdFQUF0Y0FBUUhBQVFFRm9CNVJBZ0VVL3dEMHBCUDB2UExJQ3dNQ0FXSUlCQUlCV0FjRkFsVzROaTdVVFExQUg0WTlJQUFaSXdiWTZWK0NqWEN3cURDYnJ5NEltQkFRSFhBQUVCMGRzODRnSGJQSUVRWUNWREhJYndBQmI0eHRiNHlMZElaV3hzYnl3Z2piUEFIYlBHOGlBY21USVc2emxnRnZJbG5NeWVneDBCQVFBSlc3dlJnbkJjN0QxZExLNTdIb1RzT2RaS2hSdG1nbkNkMWpVdEsyUjhzeUxUcnkzOThXSTVnbkFnVmNBYmdHZGpsTTVZT3E1SEpiTERnbkNkbDA1YXMwN0xjem9PbG0yVVp1aWtnQzZ0QUIwTk1EQVhHd3dBR1JmNUZ3NGdINlFBRWcxMG1CQVF1Njh1Q0lJTmNMQ2lDRENib2hnUVQvdXJIeTRJaURDYnJ5NElsVVVGTURid1Q0WVFMNFl1MUUwTlFCK0dQU0FBR1NNRzJPbGZnbzF3c0tnd202OHVDSmdRRUIxd0FCQWRIYlBPSloyend3TU1qNFF3SE1md0hLQU1udFZCRUpBMTd0b3UzN2NDSFhTY0lmbFRBZzF3c2YzZ0tTVzMvZ0FjQUFqeE1nMTBuQ0g0OExnQ0RYSWRzODJ6eC8yekhnM2c4TUNnSUsyenpiUEg4TERBQUt5QUhQRnNrQkduLzRRbkJZQTRCQ0FXMXQyendOQWM3SWNRSEtBVkFIQWNvQWNBSEtBbEFGSU5kSmdRRUx1dkxnaUNEWEN3b2dnd202SVlFRS83cXg4dUNJZ3dtNjh1Q0p6eFpRQS9vQ2NBSEthQ051c3lWdXM3R1hNek1CY0FIS0FPTU5JVzZ6bkg4QnlnQUJJRzd5MElBQnpKVXhjQUhLQU9MSkFmc0FEZ0NZZndIS0FNaHdBY29BY0FIS0FDUnVzNTEvQWNvQUJDQnU4dENBVUFUTWxqUURjQUhLQU9Ja2JyT2Rmd0hLQUFRZ2J2TFFnRkFFekpZMEEzQUJ5Z0RpY0FIS0FBSi9BY29BQXNsWXpBRkN5SEFCeXg5dkFBRnZqRzF2akFIYlBHOGlBY21USVc2emxnRnZJbG5NeWVneEVBQzZJTmRLSWRkSmx5RENBQ0xDQUxHT1NnTnZJb0IvSXM4eHF3S2hCYXNDVVZXMkNDRENBSndncWdJVjF4aFFNODhXUUJUZVdXOENVMEdod2dDWnlBRnZBbEJFb2FvQ2poSXhNOElBbWRRdzBDRFhTaUhYU1pKd0lPTGk2RjhEQUFRd2JaQTRPMm89In19LCJzb3VyY2VzIjp7ImV4YW1wbGVzL2VjaG8udGFjdCI6IlkyOXVkSEpoWTNRZ1JXTm9ieUI3Q2dvZ0lDQWdhVzVwZENoaE9pQkpiblFwSUhzS0lDQWdJQ0FnSUNBS0lDQWdJSDBLSUNBZ0lBb2dJQ0FnY21WalpXbDJaU2h0YzJjNklGTjBjbWx1WnlrZ2V3b2dJQ0FnSUNBZ0lISmxjR3g1S0cxelp5NWhjME52YlcxbGJuUW9LU2s3Q2lBZ0lDQjlDaUFnSUNBS0lDQWdJSEpsWTJWcGRtVW9iWE5uT2lCVGJHbGpaU2tnZXdvZ0lDQWdJQ0FnSUhKbGNHeDVLRzF6Wnk1aGMwTmxiR3dvS1NrN0NpQWdJQ0I5Q2dvZ0lDQWdaMlYwSUdaMWJpQm9aV3hzYnloemNtTTZJRk4wY21sdVp5azZJRk4wY21sdVp5QjdDaUFnSUNBZ0lDQWdiR1YwSUdKMWFXeGtaWEk2SUZOMGNtbHVaMEoxYVd4a1pYSWdQU0JpWldkcGJsTjBjbWx1WnlncE93b2dJQ0FnSUNBZ0lHSjFhV3hrWlhJdVlYQndaVzVrS0NKSVpXeHNieXdnSWlrN0NpQWdJQ0FnSUNBZ1luVnBiR1JsY2k1aGNIQmxibVFvYzNKaktUc0tJQ0FnSUNBZ0lDQnlaWFIxY200Z1luVnBiR1JsY2k1MGIxTjBjbWx1WnlncE93b2dJQ0FnZlFwOSJ9LCJjb21waWxlciI6eyJuYW1lIjoidGFjdCIsInZlcnNpb24iOiIxLjAuMCIsInBhcmFtZXRlcnMiOiJ7XCJlbnRyeXBvaW50XCI6XCIuL2V4YW1wbGVzL2VjaG8udGFjdFwiLFwib3B0aW9uc1wiOnt9fSJ9fQ==";

describe("TactSourceVerifier", () => {
  it("compiles", async function () {
    const tactVerifier = new TactSourceVerifier({
      writeFile: async (_path, content) => {},
      readFile: async (path) => {
        if (path === "echo.pkg") return Buffer.from(pkg, "base64");
        throw new Error("Unknown path");
      },
      readdir: async () => [],
    });

    const res = await tactVerifier.verify({
      compiler: "tact",
      compilerSettings: { tactVersion: "1.0.0" },
      knownContractAddress: "",
      knownContractHash: "XhyDRMeBeZs7IK/pJ0XFWNjeKTx2g6n0+hGQ/9Ne2SA=",
      senderAddress: "",
      sources: [
        {
          path: "echo.pkg",
        },
      ],
      tmpDir: "",
    });

    console.log(res.error);

    expect(res.result).toEqual("similar");
  });

  it("invalid file format", async function () {
    const tactVerifier = new TactSourceVerifier({
      writeFile: async (_path, content) => {},
      readFile: async (path) => {
        if (path === "echo.pkg") return Buffer.from("{{");
        throw new Error("Unknown path");
      },
      readdir: async () => [],
    });

    const res = await tactVerifier.verify({
      compiler: "tact",
      compilerSettings: { tactVersion: "1.0.0-rc8" },
      knownContractAddress: "",
      knownContractHash: "htGkXV77gc/Tx5Z55tyTyZT8aSpmpnpkFPZpe4lPMIQ=",
      senderAddress: "",
      sources: [
        {
          path: "echo.pkg",
        },
      ],
      tmpDir: "",
    });

    expect(res.result).toEqual("unknown_error");
  });
});