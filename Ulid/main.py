import streamlit as st

# Initialize tasks if not already done

if 'tasks' not in st.session_state:
    st.session_state.tasks = []
    
st.title("ToDoList")

def add_task():
    task = st.text_input("Sisesta oma ülesanne", key="new_task_input")
    if st.button("Lisa"):
        if task.strip():
            st.session_state.tasks.append({"text": task, "done": False})
            st.rerun()
        else:
            st.warning("Sisesta mitte tühi sõnum")

add_task()

def show_task():
    if not st.session_state.tasks:
        st.info("Nimekiri on tühi")
        return 
    for index, task in enumerate(st.session_state.tasks):
        cols = st.columns([0.08, 0.80, 0.11])
        with cols[0]:
            st.session_state.tasks[index]["done"] = st.checkbox("", value=task["done"], key=f"done_{index}")
        with cols[1]:
            if task["done"]:
                text = f"---{task['text']}---"
            else:
                text = task["text"]
            st.markdown(text)
        with cols[2]:
            if st.button("Kustuta", key=f"delete_{index}"):
                st.session_state.tasks.pop(index)
                st.rerun()

show_task()