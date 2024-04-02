import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import StudentListComponent from "./StudentListComponent";

describe("StudentListComponent", () => {
  const mockData = [
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
    // Add more mock data as needed
  ];

  const mockHandleView = jest.fn();
  const mockHandleEdit = jest.fn();
  const mockHandleDelete = jest.fn();

  beforeEach(() => {
    render(
      <StudentListComponent
        data={mockData}
        handleView={mockHandleView}
        handleEdit={mockHandleEdit}
        handleDelete={mockHandleDelete}
      />
    );
  });

import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; 

test("renders table with correct data", () => {
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();

    const rows = screen.getAllByRole("row");
    expect(rows.length).toBe(mockData.length + 1); 

    // Verify that each row displays the correct data
    mockData.forEach((data) => {
        expect(screen.getByText(data.id)).toBeInTheDocument();
        expect(screen.getByText(data.fName)).toBeInTheDocument();
        // Add assertions for other data fields
    });
});

  test("calls handleView when View button is clicked", () => {
    const viewButton = screen.getByText("View");
    fireEvent.click(viewButton);
    expect(mockHandleView).toHaveBeenCalledTimes(1);
    // Add assertions for other expectations related to handleView
  });

  test("calls handleEdit when Edit button is clicked", () => {
    const editButton = screen.getByText("Edit");
    fireEvent.click(editButton);
    expect(mockHandleEdit).toHaveBeenCalledTimes(1);
    // Add assertions for other expectations related to handleEdit
  });

  test("calls handleDelete when Delete button is clicked", () => {
    const deleteButton = screen.getByText("Delete");
    fireEvent.click(deleteButton);
    expect(mockHandleDelete).toHaveBeenCalledTimes(1);
    // Add assertions for other expectations related to handleDelete
  });

  // Add more test cases as needed

});