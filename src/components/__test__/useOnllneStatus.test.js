import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import useOnlineStatus from '../../Hooks/useOnlineStatus'

describe("useOnlineStatus", () => {
  it("should set onlineStatus to false when offline event is triggered", () => {
    const { result } = renderHook(() => useOnlineStatus());

    // Initially, onlineStatus should be true
    expect(result.current).toBe(true);

    // Simulate offline event
    act(()=>window.dispatchEvent(new Event("offline")))

    // onlineStatus should be false after simulating offline event
    expect(result.current).toBe(false);
  });

  it("should set onlineStatus to true when online event is triggered", () => {
    const { result } = renderHook(() => useOnlineStatus());

    // Mock offline status
    act(()=>window.dispatchEvent(new Event("offline")))

    // onlineStatus should be false
    expect(result.current).toBe(false);

    // Simulate online event
    act(()=>window.dispatchEvent(new Event("online")))

    // onlineStatus should be true after simulating online event
    expect(result.current).toBe(true);
  });
});