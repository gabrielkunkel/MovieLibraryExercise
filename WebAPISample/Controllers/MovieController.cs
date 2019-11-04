using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPISample.Models;
using Microsoft.AspNet.Identity;


namespace WebAPISample.Controllers
{
    public class MovieController : ApiController
    {
        public ApplicationDbContext context;

        public MovieController()
        {
            context = ApplicationDbContext.Create();
        }

        // GET api/values
        public IEnumerable<Movie> Get()
        {
            var movies = context.Movies.ToList();
            return movies;
        }

        // GET api/values/5
        public string Get(int id)
        {
            var movie = context.Movies.Where(a => a.MovieId == id).Single();
            return "value";
        }

        // POST api/values
        public void Post([FromBody]Movie value)
        {
            // Create movie in db logic
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
            // Update movie in db logic
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
            // Delete movie from db logic
        }
    }

}