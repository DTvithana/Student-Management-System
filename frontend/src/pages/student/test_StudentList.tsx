import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import axios from "axios";
import StudentList from "./StudentList";

jest.mock("axios");

describe("StudentList", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders search input", () => {
    render(<StudentList />);
    const searchInput = screen.getByPlaceholderText("Search");
    expect(searchInput).toBeInTheDocument();
  });

  test("searches for students", () => {
    render(<StudentList />);
    const searchInput = screen.getByPlaceholderText("Search");
    fireEvent.change(searchInput, { target: { value: "123" } });
    expect(searchInput.value).toBe("123");
  });

  test("fetches students on mount", async () => {
    const mockStudents = [
      {
        id: "1",
        fName: "John",
        lName: "Doe",
        birthday: "1990-01-01",
        degree: "Computer Science",
        index: "123456",
        address: "123 Main St",
        course1: "Math",
        course2: "English",
        course3: "Science",
        course4: "History",
      },
    ];
    axios.get.mockResolvedValueOnce({ data: mockStudents });
    render(<StudentList />);
    expect(axios.get).toHaveBeenCalledWith("http://localhost:5000/student");
    await screen.findByText("John Doe");
  });

  test("handles view click", () => {
    const mockNavigate = jest.fn();
    jest.mock("react-router-dom", () => ({
      useNavigate: () => mockNavigate,
    }));
    render(<StudentList />);
    fireEvent.click(screen.getByTestId("view-button"));
    expect(mockNavigate).toHaveBeenCalledWith("/admin/student/view");
  });

  test("handles edit click", () => {
    const mockSetItem = jest.spyOn(Storage.prototype, "setItem");
    render(<StudentList />);
    fireEvent.click(screen.getByTestId("edit-button"));
    expect(mockSetItem).toHaveBeenCalledWith("edit", expect.any(String));
  });

  test("handles delete click", async () => {
    const mockStudents = [
      {
        id: "1",
        fName: "John",
        lName: "Doe",
        birthday: "1990-01-01",
        degree: "Computer Science",
        index: "123456",
        address: "123 Main St",
        course1: "Math",
        course2: "English",
        course3: "Science",
        course4: "History",
      },
    ];
    axios.get.mockResolvedValueOnce({ data: mockStudents });
    axios.delete.mockResolvedValueOnce({});
    render(<StudentList />);
    fireEvent.click(screen.getByTestId("delete-button"));
    expect(axios.delete).toHaveBeenCalledWith(
      "http://localhost:5000/student/1"
    );
    await screen.findByText("John Doe");
  });
});