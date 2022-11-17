namespace Heatmap_DataGenerator.Services
{
    public class RandomDataService: IRandomDataService
    {
        public IEnumerable<Array> GetData()
        {
            Random generator = new Random();
            int amountInstances = generator.Next(600, 850);
            int instancesLength = generator.Next(900, 1100);

            List<Array> data = new List<Array>(amountInstances);

            while (amountInstances > 0)
            {
                data.Add(generateInstance(instancesLength));
                amountInstances--;
            }
            
            return data;
        }

        private Array generateInstance(int length) 
        { 
            int[] instance = new int[length];
            Random generator = new Random();
            int i = 0;

            while (i < length)
            {
                instance[i] = generator.Next(1, 100);
                i++;
            }

            return instance;
        }
    }
}
