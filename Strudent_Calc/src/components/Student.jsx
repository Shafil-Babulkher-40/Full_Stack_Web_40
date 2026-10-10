import React, { useState } from 'react'
import './Student.css'

const Student = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    rollNo: '',
    sub1: '',
    sub2: '',
    sub3: '',
    sub4: '',
  })

  const [result, setResult] = useState(null)

  // Map marks (0-100) to standard 10-point Grade Points & Letter Grades
  const getGradePoint = (marks) => {
    if (marks < 35) return { gp: 0, grade: 'F' }    // Fail threshold (< 35)
    if (marks >= 90) return { gp: 10, grade: 'O' }   // Outstanding
    if (marks >= 80) return { gp: 9, grade: 'A+' }  // Excellent
    if (marks >= 70) return { gp: 8, grade: 'A' }   // Very Good
    if (marks >= 60) return { gp: 7, grade: 'B+' }  // Good
    if (marks >= 50) return { gp: 6, grade: 'B' }   // Above Average
    return { gp: 5, grade: 'C' }                    // Pass / Average (35-49)
  }

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }))
  }

  const generateMarksheet = (e) => {
    e.preventDefault()

    const m1 = Number(formData.sub1) || 0
    const m2 = Number(formData.sub2) || 0
    const m3 = Number(formData.sub3) || 0
    const m4 = Number(formData.sub4) || 0

    // Check if student failed in any subject (< 35)
    const isFailed = m1 < 35 || m2 < 35 || m3 < 35 || m4 < 35

    const g1 = getGradePoint(m1)
    const g2 = getGradePoint(m2)
    const g3 = getGradePoint(m3)
    const g4 = getGradePoint(m4)

    const total = m1 + m2 + m3 + m4
    const percentage = (total / 400) * 100

    // SGPA is set to 0.00 if failed in any subject, otherwise calculated normally
    const sgpa = isFailed ? '0.00' : ((g1.gp + g2.gp + g3.gp + g4.gp) / 4).toFixed(2)
    const status = isFailed ? 'FAIL' : 'PASS'

    setResult({
      name: formData.studentName,
      rollNo: formData.rollNo,
      m1,
      m2,
      m3,
      m4,
      total,
      percentage: percentage.toFixed(2),
      sgpa,
      status,
    })
  }

  return (
    <div className="container">
      <h2>Student Marksheet Generator</h2>

      <form id="marksForm" onSubmit={generateMarksheet}>
        <div className="section-title">Student Information</div>
        <div className="grid-2">
          <div className="form-group">
            <label htmlFor="studentName">Full Name</label>
            <input
              type="text"
              id="studentName"
              placeholder="e.g. John Doe"
              value={formData.studentName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="rollNo">Roll Number / ID</label>
            <input
              type="text"
              id="rollNo"
              placeholder="e.g. 101"
              value={formData.rollNo}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="section-title">Subject Marks (Max: 100)</div>
        <div className="grid-2">
          <div className="form-group">
            <label htmlFor="sub1">Data Structure</label>
            <input
              type="number"
              id="sub1"
              min="0"
              max="100"
              placeholder="0 - 100"
              value={formData.sub1}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="sub2">OOP using Java</label>
            <input
              type="number"
              id="sub2"
              min="0"
              max="100"
              placeholder="0 - 100"
              value={formData.sub2}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="sub3">Full Stack Web</label>
            <input
              type="number"
              id="sub3"
              min="0"
              max="100"
              placeholder="0 - 100"
              value={formData.sub3}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="sub4">Advance RDBMS</label>
            <input
              type="number"
              id="sub4"
              min="0"
              max="100"
              placeholder="0 - 100"
              value={formData.sub4}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <button type="submit">Generate Marksheet</button>
      </form>

      {result && (
        <div id="marksheetContainer">
          <div className="marksheet-header">
            <h1>Academic Progress Report</h1>
            <p>Official Student Marksheet</p>
          </div>

          <table className="student-info-table">
            <tbody>
              <tr>
                <td>
                  <strong>Student Name:</strong> <span>{result.name}</span>
                </td>
                <td style={{ textAlign: 'right' }}>
                  <strong>Roll No:</strong> <span>{result.rollNo}</span>
                </td>
              </tr>
            </tbody>
          </table>

          <table className="marks-table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Max Marks</th>
                <th>Marks Obtained</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Data Structure</td>
                <td>100</td>
                <td>{result.m1}</td>
              </tr>
              <tr>
                <td>OOP using Java</td>
                <td>100</td>
                <td>{result.m2}</td>
              </tr>
              <tr>
                <td>Full Stack Web</td>
                <td>100</td>
                <td>{result.m3}</td>
              </tr>
              <tr>
                <td>Advance RDBMS</td>
                <td>100</td>
                <td>{result.m4}</td>
              </tr>
            </tbody>
          </table>

          <div className="summary-box" id="summaryBox">
            <div className="summary-item">
              Total Marks: <span>{result.total} / 400</span>
            </div>
            <div className="summary-item">
              Percentage: <span>{result.percentage}%</span>
            </div>
            <div className="summary-item">
              Result: <span style={{ color: result.status === 'FAIL' ? 'red' : 'green' }}>{result.status}</span>
            </div>
            <div className="summary-item">
              SGPA: <span>{result.sgpa}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Student