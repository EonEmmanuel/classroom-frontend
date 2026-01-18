import { Subject } from "@/types";

export const MOCK_SUBJECTS: Subject[] = [
    {
        id: 1,
        code: "CSC101",
        name: "Introduction to Computer Science",
        department: "Computer Science",
        description:
            "Introduces fundamental concepts of computing, problem-solving, algorithms, and basic programming principles.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 2,
        code: "MAT201",
        name: "Linear Algebra",
        department: "Mathematics",
        description:
            "Covers vectors, matrices, systems of linear equations, eigenvalues, and their applications in science and engineering.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 3,
        code: "ECO150",
        name: "Principles of Microeconomics",
        department: "Economics",
        description:
            "Examines consumer behavior, firm production decisions, market structures, and the role of supply and demand.",
        createdAt: new Date().toISOString(),
    },
]
