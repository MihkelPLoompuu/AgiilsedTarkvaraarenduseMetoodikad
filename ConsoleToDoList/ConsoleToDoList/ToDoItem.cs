using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleToDoList
{
    public class ToDoItem
    {
        public string Description { get; }
        public bool IsCompleted { get; set; }

        public ToDoItem(string description)
        {
            Description = description;
            IsCompleted = false;
        }
    }
}
