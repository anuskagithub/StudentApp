using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentApi.Data;
using StudentApi.Models;

namespace StudentApi.Controllers
{
    [ApiController]
    [Route("api/students")]
    [Authorize]
    public class StudentsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public StudentsController(ApplicationDbContext context)
        {
            _context = context;

            if (!_context.Students.Any())
            {
                _context.Students.AddRange(
                    new Student { Name = "Rahul", Class = "10", Section = "A" },
                    new Student { Name = "Anita", Class = "9", Section = "B" }
                );
                _context.SaveChanges();
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetStudents()
            => Ok(await _context.Students.ToListAsync());

        [HttpPost]
        public async Task<IActionResult> AddStudent(Student student)
        {
            _context.Students.Add(student);
            await _context.SaveChangesAsync();
            return Ok(student);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateStudent(int id, Student student)
        {
            var s = await _context.Students.FindAsync(id);
            if (s == null) return NotFound();

            s.Name = student.Name;
            s.Class = student.Class;
            s.Section = student.Section;

            await _context.SaveChangesAsync();
            return Ok(s);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStudent(int id)
        {
            var s = await _context.Students.FindAsync(id);
            if (s == null) return NotFound();

            _context.Students.Remove(s);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}
