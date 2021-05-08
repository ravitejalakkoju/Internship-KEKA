using System;

namespace OOPS_Concepts
{
    public class StateChangeEventArgs: EventArgs
    {
        public readonly bool OldState;
        public readonly bool NewState;

        public StateChangeEventArgs(bool oldState, bool newState)
        {
            OldState = oldState;
            NewState = newState;
        }
    }
    public class Switch
    {
        bool state;

        public event EventHandler<StateChangeEventArgs> StateChanged;

        protected virtual void OnStateChanged(StateChangeEventArgs e)
        {
            StateChanged?.Invoke(this, e);
        }

        public bool State
        {
            get => state;
            set
            {
                if (state == value) return;
                bool oldState = state;
                state = value;
                OnStateChanged(new StateChangeEventArgs(oldState, state));
            }
        }
    }
    class PEvent
    {
        public PEvent()
        {
            Switch @switch = new Switch();
            @switch.State = false;
            @switch.StateChanged += switch_StateChanged;
            @switch.State = true;
        }

        private void switch_StateChanged (object sender, StateChangeEventArgs e)
        {
            Console.WriteLine($"NewState: {e.NewState}, OldState: {e.OldState}");
        }
    }
}
